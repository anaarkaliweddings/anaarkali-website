-- Check if consultation_bookings table exists and its structure
SELECT 
    table_name,
    column_name,
    data_type,
    is_nullable,
    column_default
FROM information_schema.columns 
WHERE table_name = 'consultation_bookings'
ORDER BY ordinal_position;

-- Check constraints on consultation_bookings table
SELECT 
    conname as constraint_name,
    pg_get_constraintdef(oid) as constraint_definition
FROM pg_constraint 
WHERE conrelid = 'consultation_bookings'::regclass;
