-- Enable the uuid-ossp extension for generating UUIDs
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create contact_forms table
CREATE TABLE IF NOT EXISTS contact_forms (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Personal Information
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  
  -- Event Details
  wedding_date DATE,
  venue TEXT,
  guest_count VARCHAR(50),
  budget_range VARCHAR(100),
  
  -- Services and Preferences
  services_interested TEXT[], -- Array of strings
  message TEXT NOT NULL,
  preferred_contact VARCHAR(20) CHECK (preferred_contact IN ('email', 'phone', 'either')),
  timeline VARCHAR(100),
  how_did_you_hear TEXT,
  
  -- Metadata
  status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'converted', 'archived')),
  notes TEXT
);

-- Create consultation_bookings table
CREATE TABLE IF NOT EXISTS consultation_bookings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Personal Information
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  
  -- Consultation Details
  consultation_type VARCHAR(20) NOT NULL CHECK (consultation_type IN ('virtual', 'in_person')),
  preferred_date DATE NOT NULL,
  preferred_time TIME NOT NULL,
  timezone VARCHAR(50),
  
  -- Event Details
  wedding_date DATE,
  budget_range VARCHAR(100),
  message TEXT,
  
  -- Booking Status
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  confirmed_date DATE,
  confirmed_time TIME,
  meeting_link TEXT, -- For virtual consultations
  notes TEXT
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_contact_forms_email ON contact_forms(email);
CREATE INDEX IF NOT EXISTS idx_contact_forms_created_at ON contact_forms(created_at);
CREATE INDEX IF NOT EXISTS idx_contact_forms_status ON contact_forms(status);

CREATE INDEX IF NOT EXISTS idx_consultation_bookings_email ON consultation_bookings(email);
CREATE INDEX IF NOT EXISTS idx_consultation_bookings_created_at ON consultation_bookings(created_at);
CREATE INDEX IF NOT EXISTS idx_consultation_bookings_status ON consultation_bookings(status);
CREATE INDEX IF NOT EXISTS idx_consultation_bookings_preferred_date ON consultation_bookings(preferred_date);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers to automatically update updated_at
CREATE OR REPLACE TRIGGER update_contact_forms_updated_at 
    BEFORE UPDATE ON contact_forms 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

CREATE OR REPLACE TRIGGER update_consultation_bookings_updated_at 
    BEFORE UPDATE ON consultation_bookings 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE contact_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultation_bookings ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Anyone can insert contact forms" ON contact_forms;
DROP POLICY IF EXISTS "Anyone can insert consultation bookings" ON consultation_bookings;
DROP POLICY IF EXISTS "Only authenticated users can read contact forms" ON contact_forms;
DROP POLICY IF EXISTS "Only authenticated users can read consultation bookings" ON consultation_bookings;
DROP POLICY IF EXISTS "Only authenticated users can update contact forms" ON contact_forms;
DROP POLICY IF EXISTS "Only authenticated users can update consultation bookings" ON consultation_bookings;

-- Create more permissive policies for public access
-- Allow public inserts for contact forms (website submissions)
CREATE POLICY "Public can insert contact forms" ON contact_forms
    FOR INSERT 
    TO public
    WITH CHECK (true);

-- Allow public inserts for consultation bookings (website submissions)
CREATE POLICY "Public can insert consultation bookings" ON consultation_bookings
    FOR INSERT 
    TO public
    WITH CHECK (true);

-- Allow authenticated users to read all data (for admin dashboard)
CREATE POLICY "Authenticated users can read contact forms" ON contact_forms
    FOR SELECT 
    TO authenticated
    USING (true);

CREATE POLICY "Authenticated users can read consultation bookings" ON consultation_bookings
    FOR SELECT 
    TO authenticated
    USING (true);

-- Allow authenticated users to update data (for admin dashboard)
CREATE POLICY "Authenticated users can update contact forms" ON contact_forms
    FOR UPDATE 
    TO authenticated
    USING (true);

CREATE POLICY "Authenticated users can update consultation bookings" ON consultation_bookings
    FOR UPDATE 
    TO authenticated
    USING (true);

-- Insert some test data to verify the setup
INSERT INTO contact_forms (
    name, email, phone, wedding_date, venue, guest_count, budget_range, 
    services_interested, message, preferred_contact, timeline, how_did_you_hear
) VALUES (
    'Test Couple',
    'test@example.com',
    '+91 98765 43210',
    '2024-12-15',
    'Test Venue',
    '100-150',
    '₹5-8 lakhs',
    ARRAY['Photography', 'Videography'],
    'This is a test submission to verify the database setup is working correctly.',
    'email',
    'Testing phase',
    'Test script'
) ON CONFLICT DO NOTHING;

INSERT INTO consultation_bookings (
    name, email, phone, consultation_type, preferred_date, preferred_time,
    timezone, wedding_date, budget_range, message
) VALUES (
    'Test Consultation',
    'consultation@example.com',
    '+91 87654 32109',
    'virtual',
    '2024-03-15',
    '15:30:00',
    'Asia/Kolkata',
    '2024-08-20',
    '₹5-8 lakhs',
    'This is a test consultation booking to verify the database setup.'
) ON CONFLICT DO NOTHING;
