import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class GuestbookService {
  private supabase = createClient(
    process.env.SUPABASE_URL="https://pupxzycylidhocphtovu.supabase.co",
    process.env.SUPABASE_KEY="sb_publishable_zFajJ6ilBmXb6DC9BkBwgA_YXlEd_Yv"
  );

  async findAll() { 
    const { data } = await this.supabase.from('guestbook').select('*').order('created_at', { ascending: false });
    return data;
  }
  async create(dto: any) { return await this.supabase.from('guestbook').insert([dto]); }
  async update(id: string, dto: any) { return await this.supabase.from('guestbook').update(dto).eq('id', id); }
  async delete(id: string) { return await this.supabase.from('guestbook').delete().eq('id', id); }
}
