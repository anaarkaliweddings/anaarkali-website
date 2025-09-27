-- UNIVERSAL RLS FIX - Covers all possible roles
-- Run this in Supabase SQL Editor

-- Drop all existing policies first
DROP POLICY IF EXISTS "public_insert_contact_forms" ON contact_forms;
DROP POLICY IF EXISTS "public_insert_consultation_bookings" ON consultation_bookings;
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
DROP POLICY IF EXISTS "contact_forms_public_insert" ON contact_forms;
DROP POLICY IF EXISTS "allow_contact_form_inserts" ON contact_forms;

-- Create policies for ALL possible roles
CREATE POLICY "universal_contact_forms_insert" ON contact_forms
    FOR INSERT 
    TO public, anon, authenticated
    WITH CHECK (true);

CREATE POLICY "universal_consultation_bookings_insert" ON consultation_bookings
    FOR INSERT 
    TO public, anon, authenticated
    WITH CHECK (true);

-- Test the universal policy
INSERT INTO contact_forms (name, email, phone, message) 
VALUES ('Universal Test', 'universal@test.com', '+91 9876543210', 'Universal policy test');

-- Show success
SELECT 'Universal RLS policies created! Should work for all roles.' as status;
SELECT count(*) as total_contact_forms FROM contact_forms;
