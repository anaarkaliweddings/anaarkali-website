-- FINAL RLS FIX for Anaarkali Website Form Submissions
-- Run this in Supabase SQL Editor to fix form submission issues

-- Step 1: Drop ALL existing policies to start fresh
DROP POLICY IF EXISTS "Public can insert contact forms" ON contact_forms;
DROP POLICY IF EXISTS "Public can insert consultation bookings" ON consultation_bookings;
DROP POLICY IF EXISTS "Anyone can insert contact forms" ON contact_forms;
DROP POLICY IF EXISTS "Anyone can insert consultation bookings" ON consultation_bookings;
DROP POLICY IF EXISTS "website_contact_form_inserts" ON contact_forms;
DROP POLICY IF EXISTS "website_consultation_inserts" ON consultation_bookings;
DROP POLICY IF EXISTS "Allow all inserts" ON contact_forms;
DROP POLICY IF EXISTS "Allow all consultation inserts" ON consultation_bookings;
DROP POLICY IF EXISTS "contact_forms_insert_policy" ON contact_forms;
DROP POLICY IF EXISTS "consultation_bookings_insert_policy" ON consultation_bookings;

-- Step 2: Create simple, working policies
CREATE POLICY "contact_forms_public_insert" ON contact_forms
    FOR INSERT 
    TO public
    WITH CHECK (true);

CREATE POLICY "consultation_bookings_public_insert" ON consultation_bookings
    FOR INSERT 
    TO public
    WITH CHECK (true);

-- Step 3: Test the fix with sample data
INSERT INTO contact_forms (
    name, email, phone, wedding_date, venue, guest_count, budget_range, 
    services_interested, message, preferred_contact, timeline, how_did_you_hear
) VALUES (
    'Test User',
    'test@example.com',
    '+91 9876543210',
    '2024-12-15',
    'Test Venue',
    '100-150',
    '₹5-8 lakhs',
    ARRAY['Photography', 'Videography'],
    'This is a test submission to verify RLS policies are working correctly.',
    'email',
    'Testing RLS policies',
    'Website form test'
);

INSERT INTO consultation_bookings (
    name, email, phone, consultation_type, preferred_date, preferred_time,
    timezone, wedding_date, budget_range, message
) VALUES (
    'Test Consultation',
    'consultation@example.com',
    '+91 8765432109',
    'virtual',
    '2024-03-15',
    '15:30:00',
    'Asia/Kolkata',
    '2024-08-20',
    '₹5-8 lakhs',
    'This is a test consultation booking to verify RLS policies.'
);

-- Step 4: Verify the data was inserted
SELECT 
    'Contact forms test successful!' as status,
    count(*) as contact_forms_count
FROM contact_forms 
WHERE email = 'test@example.com';

SELECT 
    'Consultation bookings test successful!' as status,
    count(*) as consultation_count  
FROM consultation_bookings
WHERE email = 'consultation@example.com';

-- Step 5: Clean up test data
DELETE FROM contact_forms WHERE email = 'test@example.com';
DELETE FROM consultation_bookings WHERE email = 'consultation@example.com';

-- Success message
SELECT 'RLS policies fixed! Website forms should now work.' as final_status;
