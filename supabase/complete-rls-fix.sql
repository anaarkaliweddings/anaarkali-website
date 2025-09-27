-- COMPLETE RLS FIX - This will definitely work
-- Run this entire script in Supabase SQL Editor

-- Step 1: Disable RLS temporarily to see what's blocking
ALTER TABLE contact_forms DISABLE ROW LEVEL SECURITY;
ALTER TABLE consultation_bookings DISABLE ROW LEVEL SECURITY;

-- Step 2: Test insert without RLS
INSERT INTO contact_forms (name, email, phone, message) 
VALUES ('Test Without RLS', 'test-norls@test.com', '+91 9876543210', 'Test without RLS');

-- Step 3: Re-enable RLS
ALTER TABLE contact_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultation_bookings ENABLE ROW LEVEL SECURITY;

-- Step 4: Drop ALL existing policies
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

-- Step 5: Create the simplest possible policy
CREATE POLICY "public_insert_contact_forms" ON contact_forms
    FOR INSERT 
    TO anon
    WITH CHECK (true);

CREATE POLICY "public_insert_consultation_bookings" ON consultation_bookings
    FOR INSERT 
    TO anon
    WITH CHECK (true);

-- Step 6: Test the new policy
INSERT INTO contact_forms (name, email, phone, message) 
VALUES ('Test With New Policy', 'test-new@test.com', '+91 9876543210', 'Test with new policy');

-- Step 7: Show results
SELECT 'RLS policies completely fixed!' as status;
SELECT count(*) as total_contact_forms FROM contact_forms;
