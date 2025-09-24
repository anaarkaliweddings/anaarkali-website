# Supabase Database Setup

This directory contains the SQL schema and setup instructions for the Anaarkali website database.

## Quick Setup

1. **Create a Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Note down your project URL and anon key

2. **Run the Schema**
   - Copy the contents of `schema.sql`
   - Go to your Supabase dashboard → SQL Editor
   - Paste and execute the SQL

3. **Update Environment Variables**
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=your_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   ```

## Database Tables

### contact_forms
Stores all contact form submissions from the "Begin Your Story" page.

**Fields:**
- `id` - UUID primary key
- `name` - Full name of the couple
- `email` - Contact email
- `phone` - Phone number
- `wedding_date` - Wedding date
- `venue` - Wedding venue
- `guest_count` - Number of guests
- `budget_range` - Budget range
- `services_interested` - Array of interested services
- `message` - Detailed form submission
- `status` - Processing status (new, contacted, converted, archived)

### consultation_bookings
Stores consultation booking requests.

**Fields:**
- `id` - UUID primary key
- `name` - Client name
- `email` - Contact email
- `phone` - Phone number
- `consultation_type` - virtual or in_person
- `preferred_date` - Requested date
- `preferred_time` - Requested time
- `wedding_date` - Wedding date
- `budget_range` - Budget range
- `status` - Booking status (pending, confirmed, completed, cancelled)

## Security

- Row Level Security (RLS) is enabled
- Public can INSERT (form submissions)
- Only authenticated users can SELECT/UPDATE (admin access)
- Automatic timestamps and triggers are set up

## Usage in Code

```typescript
import { submitContactForm, submitConsultationBooking } from '@/lib/supabase'

// Submit contact form
const result = await submitContactForm({
  name: 'John & Jane',
  email: 'john@example.com',
  phone: '+91 98765 43210',
  // ... other fields
})

// Submit consultation booking
const booking = await submitConsultationBooking({
  name: 'John Doe',
  email: 'john@example.com',
  consultation_type: 'virtual',
  // ... other fields
})
```
