
-- Insert admin role for cprimeaux@etec-services.com
INSERT INTO public.user_roles (user_id, role)
VALUES ('7f2f2a59-9e81-48f5-b056-17346bd5d0ed', 'admin')
ON CONFLICT (user_id, role) DO NOTHING;

-- Update profile status to approved
UPDATE public.profiles
SET status = 'approved'
WHERE id = '7f2f2a59-9e81-48f5-b056-17346bd5d0ed';
