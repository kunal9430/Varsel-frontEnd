export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  phone: string;
  company: string;
  timeline: string;
}

export const contactFormInitialState: ContactFormData = {
  name: '',
  email: '',
  message: '',
  phone: '',
  company: '',
  timeline: ''
};