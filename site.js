const c=window.SITE_CONTENT;
const $=id=>document.getElementById(id);
const txt=(id,value)=>$(id).textContent=value||'';
const safeImage=(url)=>url && /^(assets\/|https:\/\/)/i.test(url)?url:'';
function photo(el,url,label){const path=safeImage(url);if(path){el.style.backgroundImage=`linear-gradient(0deg,rgba(8,23,33,.12),rgba(8,23,33,.12)),url("${path.replace(/"/g,'%22')}")`;el.classList.add('has-photo');el.textContent='';}else{el.textContent=label;}}
txt('brand-name',c.company);txt('tagline',c.tagline);txt('subheading',c.subheading);txt('benefits-title',c.benefitsTitle);txt('about-title',c.aboutTitle);txt('about-text',c.aboutText);txt('leader-title',c.leaderTitle);txt('leader-name',c.leaderName);txt('leader-role',c.leaderRole);txt('leader-bio',c.leaderBio);txt('quote-title',c.quoteTitle);txt('quote-intro',c.quoteIntro);txt('footer-company',c.company);txt('footer-location',c.location);txt('footer-note',c.footerNote);
if(safeImage(c.heroImage))document.querySelector('.hero').style.backgroundImage=`url("${c.heroImage.replace(/"/g,'%22')}")`;
const phone=c.phone?.trim();if(phone){$('hero-phone').textContent=`Call ${phone}`;$('hero-phone').href=`tel:${phone.replace(/[^+\d]/g,'')}`;$('footer-phone').textContent=phone;$('footer-phone').href=`tel:${phone.replace(/[^+\d]/g,'')}`;}else{$('footer-phone').remove();}
$('footer-email').textContent=c.email;$('footer-email').href=`mailto:${c.email}`;
const grid=$('services-grid');const select=$('service-select');
c.services.forEach((s,i)=>{const card=document.createElement('article');card.className='service-card';const media=document.createElement('div');media.className='service-photo';photo(media,s.image,`Service Photo ${i+1}`);const body=document.createElement('div');body.className='service-body';const h=document.createElement('h3');h.textContent=s.title;const p=document.createElement('p');p.textContent=s.description;const a=document.createElement('a');a.href='#quote';a.textContent='Request Service →';body.append(h,p,a);card.append(media,body);grid.append(card);const option=document.createElement('option');option.textContent=s.title;select.append(option);});
c.benefits.forEach(b=>{const item=document.createElement('article');const h=document.createElement('h3');h.textContent=b.title;const p=document.createElement('p');p.textContent=b.description;item.append(h,p);$('benefits-grid').append(item);});
photo($('about-image'),c.aboutImage,'Company Photo');photo($('leader-image'),c.leaderImage,'Leadership Photo');
$('quote-form').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.currentTarget);const body=[...f.entries()].map(([k,v])=>`${k}: ${v}`).join('\n');const subject=`Website inquiry: ${f.get('service')}`;window.location.href=`mailto:${encodeURIComponent(c.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;});
$('menu-toggle').addEventListener('click',()=>{const open=$('nav').classList.toggle('open');$('menu-toggle').setAttribute('aria-expanded',String(open));});
$('nav').querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{$('nav').classList.remove('open');$('menu-toggle').setAttribute('aria-expanded','false');}));
