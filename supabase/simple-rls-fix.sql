-- SIMPLE RLS FIX - Run this in Supabase SQL Editor

-- First, drop the existing policy that's causing the error
DROP POLICY IF EXISTS "contact_forms_public_insert" ON contact_forms;

-- Create a new working policy
CREATE POLICY "allow_contact_form_inserts" ON contact_forms
    FOR INSERT 
    WITH CHECK (true);

-- Test with a simple insert
INSERT INTO contact_forms (name, email, phone, message) 
VALUES ('Test', 'test@test.com', '+91 9876543210', 'Test message');

-- Show success
SELECT 'Form submissions should now work!' as status;
