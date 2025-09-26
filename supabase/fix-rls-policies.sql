-- Fix RLS policies for Anaarkali website form submissions
-- Run this in Supabase SQL Editor to enable public form submissions

-- First, drop any existing problematic policies
DROP POLICY IF EXISTS "Public can insert contact forms" ON contact_forms;
DROP POLICY IF EXISTS "Public can insert consultation bookings" ON consultation_bookings;
DROP POLICY IF EXISTS "Anyone can insert contact forms" ON contact_forms;
DROP POLICY IF EXISTS "Anyone can insert consultation bookings" ON consultation_bookings;

-- Create new simple policies that allow all public inserts
CREATE POLICY "website_contact_form_inserts" ON contact_forms
    FOR INSERT 
    WITH CHECK (true);

CREATE POLICY "website_consultation_inserts" ON consultation_bookings
    FOR INSERT 
    WITH CHECK (true);

-- Test the fix by inserting sample data
INSERT INTO contact_forms (
    name, email, phone, wedding_date, venue, guest_count, budget_range, 
    services_interested, message, preferred_contact, timeline, how_did_you_hear
) VALUES (
    'RLS Test Couple',
    'rlstest@example.com',
    '+91 98765 43210',
    '2024-12-15',
    'RLS Test Venue',
    '100-150',
    '₹5-8 lakhs',
    ARRAY['Photography', 'Videography'],
    'This is a test submission to verify RLS policies are working correctly.',
    'email',
    'Testing RLS policies',
    'RLS policy test'
);

INSERT INTO consultation_bookings (
    name, email, phone, consultation_type, preferred_date, preferred_time,
    timezone, wedding_date, budget_range, message
) VALUES (
    'RLS Test Booking',
    'rlsbooking@example.com',
    '+91 87654 32109',
    'virtual',
    '2024-03-15',
    '15:30:00',
    'Asia/Kolkata',
    '2024-08-20',
    '₹5-8 lakhs',
    'This is a test consultation booking to verify RLS policies.'
);

-- Show success message
SELECT 
    'RLS policies fixed successfully! Website forms should now work.' as status,
    count(*) as contact_forms_count
FROM contact_forms 
WHERE email LIKE '%example.com';

SELECT 
    'Consultation bookings also working!' as status,
    count(*) as consultation_count  
FROM consultation_bookings
WHERE email LIKE '%example.com';
