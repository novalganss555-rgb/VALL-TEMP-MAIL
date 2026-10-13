import {NextResponse} from 'next/server';
export function GET(){return NextResponse.json({app:'VALL TEMP MAIL',status:'ok',provider:'mail.tm',note:'Email requests connect directly from the browser to the provider.'},{headers:{'Cache-Control':'no-store'}})}
