-- Fix consultation_bookings table (handles existing objects)
-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS update_consultation_bookings_updated_at ON consultation_bookings;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public to insert consultation bookings" ON consultation_bookings;
DROP POLICY IF EXISTS "Allow users to read their own consultation bookings" ON consultation_bookings;
DROP POLICY IF EXISTS "Allow authenticated users to update consultation bookings" ON consultation_bookings;
DROP POLICY IF EXISTS "Allow authenticated users to delete consultation bookings" ON consultation_bookings;
DROP POLICY IF EXISTS "Allow public to read consultation bookings" ON consultation_bookings;

-- Drop the table if it exists (to start fresh)
DROP TABLE IF EXISTS consultation_bookings;

-- Create the table fresh
CREATE TABLE consultation_bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  consultation_type VARCHAR(50) NOT NULL,
  preferred_date DATE NOT NULL,
  preferred_time VARCHAR(10) NOT NULL,
  message TEXT,
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_consultation_bookings_email ON consultation_bookings(email);
CREATE INDEX idx_consultation_bookings_date ON consultation_bookings(preferred_date);
CREATE INDEX idx_consultation_bookings_status ON consultation_bookings(status);
CREATE INDEX idx_consultation_bookings_created_at ON consultation_bookings(created_at);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_consultation_bookings_updated_at 
    BEFORE UPDATE ON consultation_bookings 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE consultation_bookings ENABLE ROW LEVEL SECURITY;

-- Create simple policies for public access
CREATE POLICY "Allow public to insert consultation bookings" ON consultation_bookings
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public to read consultation bookings" ON consultation_bookings
    FOR SELECT USING (true);

-- Grant necessary permissions
GRANT ALL ON consultation_bookings TO anon;
GRANT ALL ON consultation_bookings TO authenticated;
GRANT ALL ON consultation_bookings TO service_role;
