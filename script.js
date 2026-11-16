const EV={log:"Logs com acesso remoto",mari:"Depoimento da Mariana",alex:"Alerta do Alex",mail:"E-mail de phishing",dom:"Domínio falso",troj:"Trojan no PC"};
const Q=[
["srv","O alerta das 02h00","O banco de dados da TechShield foi invadido e um ransomware bloqueou os servidores. Dados confidenciais vazaram. Qual é a sua primeira ação?",
["Copiar os logs e fotografar a tela do ransomware","g","Boa! Preservar as provas antes de mexer em tudo é o primeiro passo."],
["Reiniciar os servidores para ver se o bloqueio some","m","Reiniciar apaga dados temporários que seriam provas. Você perdeu pistas."],
["Pagar o resgate para recuperar os dados logo","b","Pagar não garante nada e financia o crime. O caso segue, mas você perdeu tempo."]],
["ppl","Quem avisar?","Antes de investigar, é preciso alinhar a empresa. Quem você aciona?",
["A diretoria e a equipe de resposta a incidentes","g","Certo! Comunicação rápida e organizada evita decisões isoladas."],
["Só o grupo de mensagens dos funcionários","m","Informação solta gera boatos e pode alertar o invasor."],
["Publicar o ataque nas redes sociais da empresa","b","Isso atrai curiosos e alerta o criminoso. O caso segue, mas a situação piorou."]],
["net","Os registros do servidor","Os logs mostram acessos com as credenciais administrativas da Mariana, vindos de um IP remoto desconhecido. O que você faz?",
["Anotar horários e IP e cruzar com o firewall","g","Excelente. Dados cruzados viram prova sólida.","log"],
["Apagar logs antigos para organizar o sistema","m","Logs antigos são prova. Você jogou pistas fora."],
["Concluir que a Mariana é a culpada","b","Credencial usada não significa que ela agiu. O caso segue, mas você errou o foco."]],
["ppl","Conversa com a Mariana","Mariana está nervosa e diz que só clicou num link enviado pela TI. Como conduzir a conversa?",
["Ouvir com calma e pedir que descreva o que clicou","g","Ótimo. Um depoimento tranquilo revela detalhes úteis.","mari"],
["Pressionar até ela confessar","m","Pressão gera respostas confusas e pouco confiáveis."],
["Afastá-la do cargo na hora","b","Punir antes de provar atrapalha a colaboração. O caso segue, com menos ajuda."]],
["ppl","O alerta do Alex","Alex, ex-desenvolvedor demitido, diz que foi injustiçado e avisa sobre um e-mail suspeito de “Atualização de Sistema” que todos receberam.",
["Ouvir o Alex e pedir uma cópia do e-mail","g","Boa! Mesmo quem tem mágoa pode ter informação valiosa.","alex"],
["Ignorar, por ele ser ex-funcionário","m","Ignorar uma testemunha pode custar uma pista importante."],
["Acusar o Alex e chamar a polícia","b","Sem provas, acusar é injusto e desvia o foco. O caso segue, mas você perdeu muito."]],
["mail","Analisando o e-mail","O e-mail falso parece vir da TI, mas o endereço tem uma letra trocada. Como analisá-lo com segurança?",
["Ler o cabeçalho completo em um ambiente isolado","g","Perfeito. O cabeçalho mostra por onde a mensagem passou.","mail"],
["Só ler o texto e comparar com e-mails verdadeiros","m","Ajuda um pouco, mas sem o cabeçalho a origem fica oculta."],
["Clicar no link para ver onde ele leva","b","O link instalou malware também no seu computador de investigação. Fim de jogo."]],
["mail","O domínio disfarçado","O remetente usou um domínio parecido com o da empresa, registrado há poucos dias. O que fazer?",
["Consultar o registro do domínio e anotar data e provedor","g","Ótimo. Domínio novo e disfarçado é sinal clássico de phishing.","dom"],
["Pedir só o bloqueio do domínio","m","Bloquear ajuda, mas sem registrar os dados você perde rastros."],
["Responder ao golpista oferecendo dinheiro","b","O chantagista ganhou tempo, extraiu informações do seu sistema e expôs os dados na dark web. Fim de jogo."]],
["net","Rastreando o IP","Com o IP remoto em mãos, falta descobrir a porta de entrada do ataque. Qual o próximo passo?",
["Rastrear os pacotes de dados até a origem","g","Certo. Rastrear antes de agir revela como o invasor entrou."],
["Observar sem registrar nada","m","Sem registro, nada vira prova. Você perdeu tempo."],
["Bloquear o IP imediatamente","b","O invasor percebeu, ativou a autodestruição e os dados foram apagados para sempre. Fim de jogo."]],
["troj","O trojan","No computador da Mariana há um arquivo malicioso (trojan) que envia credenciais para um servidor externo chamado Ciber_Shadow. O que fazer?",
["Isolar o PC da rede, sem desligar, e copiar a memória","g","Excelente. Isolar preserva as provas e corta a comunicação.","troj"],
["Apagar o arquivo e seguir em frente","m","Remover sem copiar destrói a prova principal."],
["Formatar o computador agora","b","Formatar apagou as provas e o invasor manteve outros acessos. Fim de jogo."]],
["net","As senhas","Mariana usa a mesma senha em vários sistemas da empresa. Como reduzir o risco?",
["Trocar todas as senhas e ativar verificação em duas etapas","g","Ótimo. A verificação em duas etapas barra senhas roubadas."],
["Pedir que ela troque só a senha do e-mail","m","Ajuda, mas as outras contas seguem expostas."],
["Manter as senhas até o fim do caso","b","O invasor usou as senhas antigas e entrou de novo. Fim de jogo."]],
["srv","Os backups","O ransomware travou os servidores. Existem backups, mas ninguém sabe se estão limpos. O que fazer?",
["Verificar os backups offline e checar os outros servidores","g","Certo. Backup limpo e isolado é a melhor defesa."],
["Restaurar o backup direto no servidor atingido","m","Pode funcionar, mas sem checar você corre o risco de reinfectar."],
["Ligar o disco de backup ao servidor infectado","b","O ransomware criptografou também o backup. Fim de jogo."]],
["gh","O rastro do Ciber_Shadow","O servidor externo Ciber_Shadow recebe as senhas roubadas. Como agir?",
["Reunir os indicadores do ataque e acionar as autoridades","g","Perfeito. Uma investigação formal tem validade e proteção legal."],
["Tentar derrubar o servidor por conta própria","m","É arriscado e fora da lei. Você perdeu tempo."],
["Invadir de volta sem mascarar seu IP","b","O criminoso detectou a conexão, invadiu seu computador de investigação e vazou as informações. Fim de jogo."]],
["troj","Dentro do malware","Para achar a chave de descriptografia, é preciso analisar o código do malware. Como fazer?",
["Descompilar em um ambiente isolado (sandbox)","g","Ótimo. Analisar isolado protege o seu sistema."],
["Rodar só o antivírus e esperar","m","O antivírus bloqueia, mas não revela a chave."],
["Executar o malware no seu computador","b","O malware infectou a sua máquina e travou a investigação. Fim de jogo."]],
["srv","A chave","Você encontrou a chave de descriptografia. Como usá-la sem risco?",
["Testar primeiro numa cópia dos dados","g","Certo. Testar em cópia evita perder tudo."],
["Aplicar em todos os servidores de uma vez","m","Pode dar certo, mas sem teste o risco é alto."],
["Aplicar direto no banco original, sem cópia","b","A chave falhou e corrompeu o banco original. Fim de jogo."]],
["ppl","O relatório","Hora de entregar o relatório à diretoria. Como escrevê-lo?",
["Linha do tempo, provas e a conclusão de que a Mariana foi vítima","g","Excelente. Um relatório claro protege inocentes e orienta decisões."],
["Só um resumo curto com a conclusão","m","Sem as provas, o relatório perde força."],
["Culpar a Mariana pelo ataque","b","A diretoria demitiu a vítima e o verdadeiro criminoso seguiu livre. Fim de jogo."]],
["gh","Nunca mais","Com o caso resolvido, como a TechShield evita um novo ataque?",
["Treinamento contra phishing, verificação em duas etapas e backups offline","g","Perfeito. Pessoas treinadas são a primeira barreira."],
["Só instalar um antivírus novo","m","Ajuda, mas não resolve o fator humano."],
["Não mudar nada, o caso está encerrado","b","Semanas depois, o mesmo golpe funcionou de novo. Fim de jogo."]]
];
const N=Q.length;
const sw=(c,w)=>`<g fill="none" stroke="${c}" stroke-width="${w||2}">`;
const G=(x,y,s,c)=>`<g transform="translate(${x} ${y}) scale(${s})" class="float"><use href="#gh"/></g>`;
const P=(x,y,n,col)=>`<circle cx="${x}" cy="${y}" r="26" fill="${col}"/><circle cx="${x}" cy="${y-6}" r="8" fill="#fff" opacity=".85"/><path d="M${x-14} ${y+20}a14 12 0 0 1 28 0z" fill="#fff" opacity=".85"/><text x="${x}" y="${y+46}" text-anchor="middle" font-size="13" fill="var(--ink)">${n}</text>`;
const ART={
srv:()=>`<svg viewBox="0 0 400 170">${[0,1,2].map(i=>`<rect x="${40+i*58}" y="30" width="48" height="110" rx="4" fill="var(--pn)" stroke="var(--ln)"/>${[0,1,2,3].map(j=>`<circle cx="${52+i*58}" cy="${48+j*24}" r="3" fill="${(i+j)%3?'var(--ok)':'var(--bad)'}" class="blink" style="animation-delay:${(i*4+j)*.17}s"/><rect x="${60+i*58}" y="${45+j*24}" width="20" height="6" rx="2" fill="var(--ln)"/>`).join('')}`).join('')}${G(285,75,2.2)}<text x="285" y="150" text-anchor="middle" font-size="13" fill="var(--mut)">02:00 · acesso negado</text></svg>`,
net:()=>`<svg viewBox="0 0 400 170">${sw('var(--ln)')}<path d="M70 85L160 40M70 85L160 130M160 40L260 85M160 130L260 85M260 85L340 85"/></g>${[[70,85],[160,40],[160,130],[260,85]].map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="12" fill="var(--pn)" stroke="var(--gh)" stroke-width="2"/>`).join('')}<circle cx="340" cy="85" r="16" fill="var(--bad)" class="blink"/><text x="340" y="125" text-anchor="middle" font-size="13" fill="var(--bad)">IP desconhecido</text></svg>`,
troj:()=>`<svg viewBox="0 0 400 170"><rect x="110" y="30" width="180" height="105" rx="8" fill="var(--pn)" stroke="var(--ln)" stroke-width="2"/><rect x="90" y="135" width="220" height="10" rx="5" fill="var(--ln)"/><path d="M200 55l30 52h-60z" fill="var(--bad)" class="blink"/><text x="200" y="100" text-anchor="middle" font-size="22" font-weight="800" fill="#fff">!</text>${G(335,55,1.1)}<text x="200" y="165" text-anchor="middle" font-size="12" fill="var(--mut)">→ Ciber_Shadow</text></svg>`,
ppl:()=>`<svg viewBox="0 0 400 170">${P(110,60,'Alex','var(--gh)')}${P(290,60,'Mariana','var(--ok)')}<text x="200" y="68" text-anchor="middle" font-size="26" fill="var(--mut)">?</text></svg>`,
mail:()=>`<svg viewBox="0 0 400 170"><rect x="110" y="40" width="180" height="110" rx="10" fill="var(--pn)" stroke="var(--ln)" stroke-width="2"/><path d="M110 50l90 55 90-55" fill="none" stroke="var(--ln)" stroke-width="2"/><path d="M335 25v45a14 14 0 0 1-28 0M335 25h-12" fill="none" stroke="var(--bad)" stroke-width="4" stroke-linecap="round"/><text x="200" y="138" text-anchor="middle" font-size="12" fill="var(--bad)">Atualização de Sistema</text></svg>`,
bad:()=>`<svg viewBox="0 0 400 170"><rect x="120" y="25" width="160" height="110" rx="8" fill="var(--pn)" stroke="var(--bad)" stroke-width="3"/>${sw('var(--bad)',8)}<path d="M170 55l60 50M230 55l-60 50" stroke-linecap="round"/></g><path d="M120 60l30 10-20 20 30 15" fill="none" stroke="var(--bad)" stroke-width="2"/></svg>`,
win:()=>`<svg viewBox="0 0 400 170"><path d="M200 20l60 20v45c0 30-25 50-60 65-35-15-60-35-60-65V40z" fill="var(--ok)"/>${sw('#fff',9)}<path d="M172 82l20 20 38-40" stroke-linecap="round" stroke-linejoin="round"/></g></svg>`,
gh:()=>`<svg viewBox="0 0 400 170">${G(200,85,3.2)}</svg>`};
const $=id=>document.getElementById(id);
function tone(f,d,t,v,at){if(!sound)return;try{ac=ac||new (window.AudioContext||window.webkitAudioContext)();const o=ac.createOscillator(),g=ac.createGain(),s=ac.currentTime+(at||0);o.type=t||'sine';o.frequency.value=f;g.gain.setValueAtTime(v||.07,s);g.gain.exponentialRampToValueAtTime(.001,s+d);o.connect(g);g.connect(ac.destination);o.start(s);o.stop(s+d)}catch(e){}}
const sfx={click:()=>tone(520,.08,'triangle'),ev:()=>{tone(660,.12,'square',.04);tone(990,.18,'square',.04,.1)},win:()=>[523,659,784,1047].forEach((f,i)=>tone(f,.3,'triangle',.08,i*.12)),bad:()=>[330,262,196,147].forEach((f,i)=>tone(f,.35,'sawtooth',.05,i*.16))};
let ev=new Set(),pts=100,i=0,prev=100,sound=true,ac,timer,best=0;
try{best=+localStorage.getItem('enigma-melhor')||0}catch(e){}
function hud(){$('hud').innerHTML=Object.keys(EV).map(k=>`<span class="tag ${ev.has(k)?'':'no'}">${ev.has(k)?EV[k]:'Pista não encontrada'}</span>`).join('')+`<span class="cnt">Integridade do caso: ${Math.max(pts,0)}%</span>`}
function type(txt,after){clearInterval(timer);const tx=$('tx');let k=0;const fin=()=>{clearInterval(timer);tx.textContent=txt;after()};tx.onclick=fin;tx.textContent='';if(matchMedia('(prefers-reduced-motion:reduce)').matches)return fin();timer=setInterval(()=>{k+=2;tx.textContent=txt.slice(0,k);if(k%6===0)tone(900+Math.random()*200,.02,'square',.012);if(k>=txt.length)fin()},16)}
function show(o){
  clearInterval(timer);$('sc').innerHTML=ART[o.sc]();$('chp').textContent=o.ch;const h=$('tt');h.textContent=o.t;h.className=o.cls||'';$('ch').innerHTML='';hud();
  type(o.x,()=>{const box=$('ch');box.innerHTML=o.b.map((b,n)=>`<button class="opt${b[2]?' main':''}" style="animation-delay:${n*.08}s"><small>${n+1}</small>${b[0]}</button>`).join('');box.querySelectorAll('button').forEach((el,n)=>el.onclick=o.b[n][1]);box.firstChild&&box.firstChild.focus({preventScroll:true})});
  scrollTo({top:0,behavior:'smooth'})}
function intro(){i=0;pts=100;prev=100;ev.clear();sfx.click();show({sc:'srv',ch:'Caso TechShield · 02h00',t:'O Enigma do Servidor Fantasma',x:'Você é a investigadora ou o investigador da Unidade de Crimes Digitais. A startup TechShield sofreu um ataque e cada decisão sua pode salvar ou perder o caso.\n\nSão '+N+' perguntas. As 5 primeiras são de treino: erros custam pontos, mas não encerram o jogo.',b:[['Iniciar investigação',ask,1],['Ver créditos',cred]]})}
function ask(){const q=Q[i];prev=pts;const o=q.slice(3).sort(()=>Math.random()-.5);show({sc:q[0],ch:'Pergunta '+(i+1)+' de '+N+(i<5?' · treino':''),t:q[1],x:q[2],b:o.map(a=>[a[0],()=>pick(a)])})}
function pick(a){const q=Q[i],t=a[1];
  if(t==='b'&&i>=5)return over(a[2]);
  if(a[3]&&!ev.has(a[3])){ev.add(a[3]);sfx.ev()}else sfx.click();
  pts-=t==='m'?8:t==='b'?15:0;
  if(pts<=0)return over('As decisões fracas se acumularam e a diretoria encerrou o caso por falta de provas. Fim de jogo.');
  const last=i===N-1;
  show({sc:q[0],ch:'Pergunta '+(i+1)+' de '+N,t:t==='g'?'Boa decisão':t==='m'?'Decisão arriscada':'Decisão ruim',x:a[2],b:[[last?'Ver resultado':'Próxima pergunta',()=>{i++;last?win():ask()},1]]})}
function over(x){sfx.bad();show({sc:'bad',ch:'Fim de jogo',t:'Fim de jogo',cls:'bad',x:x,b:[['Tentar esta pergunta de novo',()=>{pts=prev;ask()},1],['Recomeçar o caso',intro],['Ver créditos',cred]]})}
function win(){sfx.win();const p=Math.max(pts,0);if(p>best){best=p;try{localStorage.setItem('enigma-melhor',best)}catch(e){}}
  const r=p>=85?'Investigação lendária':p>=60?'Especialista em segurança':'Caso resolvido por um fio';
  show({sc:'win',ch:'Caso encerrado',t:'Caso resolvido!',cls:'win',x:'Você isolou o malware, recuperou os dados e protegeu a TechShield.\n\nIntegridade final: '+p+'%\nTítulo: '+r+'\nMelhor marca: '+best+'%',b:[['Jogar de novo',intro,1],['Ver créditos',cred]]})}
function cred(){show({sc:'gh',ch:'Créditos',t:'Quem fez este caso',x:'Desenvolvimento e Criação:\n• Isabella Spelier\n• Ana Luiza\n\nFontes e Suporte Tecnológico:\n• Gemini (Inteligência Artificial)\n• Claude (Inteligência Artificial)\n• Alura\n• Google Classroom',b:[['Voltar ao início',intro,1]]})}
addEventListener('keydown',e=>{const b=document.querySelectorAll('#ch .opt')[+e.key-1];if(b)b.click();else if(e.key==='Enter'&&!document.querySelector('#ch .opt'))$('tx').click()});
$('snd').onclick=e=>{sound=!sound;e.target.textContent='Som: '+(sound?'ligado':'desligado');e.target.setAttribute('aria-pressed',sound)};
intro();