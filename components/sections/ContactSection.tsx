'use client';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { COMPANY, SERVICES } from '@/lib/constants';

const ContactFormSchema = z.object({
  fullName: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  interest: z.string().min(1),
  preferredContact: z.string().min(1),
  timeline: z.string().min(1),
  budgetRange: z.string().min(1),
  needsNda: z.boolean().optional(),
  message: z.string().min(10),
});

type FormType = z.infer<typeof ContactFormSchema>;

export default function ContactSection(){
  const {register,handleSubmit,formState:{errors,isSubmitting,isSubmitSuccessful},reset}=useForm<FormType>({resolver:zodResolver(ContactFormSchema),defaultValues:{needsNda:false}});
  const onSubmit=async()=>{await new Promise(r=>setTimeout(r,900)); toast.success('Consultation request submitted. We respond within 4 business hours.'); reset();};
  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  return <section className='mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-2'><div><h2 className='text-3xl font-bold text-white'>Book a Consultation</h2><p className='mt-3 text-slate-400'>{COMPANY.location}<br/>{COMPANY.phone}<br/>{COMPANY.email}</p><p className='mt-6 rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-4 text-sm text-cyan-100'>Prefer a quick executive overview first? Download our capability statement (available on request).</p></div><form onSubmit={handleSubmit(onSubmit)} className='space-y-3 rounded-2xl border border-slate-700 bg-[#0f1420] p-6'>
  <input {...register('fullName')} placeholder='Full Name' className='w-full rounded-lg border border-slate-700 bg-[#080b14] p-3 text-white'/>
  <input {...register('company')} placeholder='Company' className='w-full rounded-lg border border-slate-700 bg-[#080b14] p-3 text-white'/>
  <input {...register('email')} placeholder='Work Email' className='w-full rounded-lg border border-slate-700 bg-[#080b14] p-3 text-white'/>
  <select {...register('interest')} className='w-full rounded-lg border border-slate-700 bg-[#080b14] p-3 text-white'><option value=''>Service Interest</option>{SERVICES.map(s=><option key={s.id} value={s.name}>{s.name}</option>)}</select>
  <select {...register('preferredContact')} className='w-full rounded-lg border border-slate-700 bg-[#080b14] p-3 text-white'><option value=''>Preferred Contact Method</option><option>Email</option><option>Phone</option><option>Video Call</option></select>
  <div className='grid gap-3 md:grid-cols-2'><select {...register('timeline')} className='w-full rounded-lg border border-slate-700 bg-[#080b14] p-3 text-white'><option value=''>Timeline</option><option>Immediate (0-30 days)</option><option>Near term (1-3 months)</option><option>Planned (3+ months)</option></select><select {...register('budgetRange')} className='w-full rounded-lg border border-slate-700 bg-[#080b14] p-3 text-white'><option value=''>Budget Range</option><option>Under $25k</option><option>$25k-$100k</option><option>$100k-$250k</option><option>$250k+</option></select></div>
  <label className='flex items-center gap-2 text-sm text-slate-300'><input type='checkbox' {...register('needsNda')} /> NDA required before detailed scope discussion</label>
  <textarea {...register('message')} placeholder='Tell us your goals, constraints, and current challenges.' className='h-28 w-full rounded-lg border border-slate-700 bg-[#080b14] p-3 text-white'/>
  <button disabled={isSubmitting} className='rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-slate-950'>{isSubmitting?'Submitting...':'Book Consultation'}</button>
  {hasErrors && <p className='text-sm text-orange-400'>Please complete all required fields correctly.</p>}
  {isSubmitSuccessful && <p className='text-sm text-emerald-300'>Thanks. Our team will contact you within 4 business hours with next steps.</p>}
</form></section>;
}
