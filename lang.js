/* AimDojo i18n: id en zh es ja ko ru. Tambah bahasa: tambah kode di LANGS + 1 elemen di tiap baris D. */
(function(){var LANGS=['id','en','zh','es','ja','ko','ru'],NAMES={id:'Indonesia',en:'English',zh:'简体中文',es:'Español',ja:'日本語',ko:'한국어',ru:'Русский'};
var D={
tag:['Aim trainer presisi untuk game FPS','Precision aim trainer for FPS games','FPS游戏精准瞄准训练器','Entrenador de puntería de precisión para FPS','FPS向け高精度エイムトレーナー','FPS 게임용 정밀 에임 트레이너','Точный аим-тренер для FPS'],
login:['Masuk','Log in','登录','Entrar','ログイン','로그인','Войти'],
signup:['Daftar','Sign up','注册','Registrarse','新規登録','회원가입','Регистрация'],
email:['Email','Email','邮箱','Correo','メール','이메일','Эл. почта'],
pass:['Password (min. 8 karakter)','Password (min. 8 chars)','密码（至少8位）','Contraseña (mín. 8)','パスワード（8文字以上）','비밀번호 (8자 이상)','Пароль (мин. 8)'],
forgot:['Lupa password?','Forgot password?','忘记密码？','¿Olvidaste tu contraseña?','パスワードを忘れた？','비밀번호 찾기','Забыли пароль?'],
or:['atau','or','或','o','または','또는','или'],
guest:['Main sebagai Tamu','Play as Guest','游客试玩','Jugar como invitado','ゲストで遊ぶ','게스트로 플레이','Играть гостем'],
guestn:['Tamu: progres hanya tersimpan di browser ini.','Guest: progress is saved in this browser only.','游客：进度仅保存在此浏览器。','Invitado: el progreso solo se guarda en este navegador.','ゲスト：進捗はこのブラウザにのみ保存されます。','게스트: 진행 상황은 이 브라우저에만 저장됩니다.','Гость: прогресс хранится только в этом браузере.'],
nocfg:['Akun cloud belum dikonfigurasi — gunakan mode Tamu.','Cloud accounts not configured — use Guest mode.','云账号尚未配置——请使用游客模式。','Cuentas en la nube no configuradas: usa el modo invitado.','クラウドアカウント未設定です。ゲストモードを使用してください。','클라우드 계정이 설정되지 않았습니다. 게스트 모드를 사용하세요.','Облачные аккаунты не настроены — используйте гостевой режим.'],
ok_signup:['Akun dibuat. Cek email untuk verifikasi, lalu login.','Account created. Check your email to verify, then log in.','账号已创建。请查收验证邮件后登录。','Cuenta creada. Revisa tu correo y luego inicia sesión.','登録しました。メールを確認してからログインしてください。','계정이 생성되었습니다. 이메일 인증 후 로그인하세요.','Аккаунт создан. Подтвердите почту и войдите.'],
ok_reset:['Jika email terdaftar, link reset dikirim.','If the email exists, a reset link was sent.','若邮箱已注册，将发送重置链接。','Si el correo existe, se envió un enlace.','登録済みの場合、リセットリンクを送信しました。','등록된 이메일이면 재설정 링크를 보냈습니다.','Если почта зарегистрирована, ссылка отправлена.'],
newpass:['Simpan password baru','Save new password','保存新密码','Guardar nueva contraseña','新しいパスワードを保存','새 비밀번호 저장','Сохранить новый пароль'],
mode:['Mode latihan','Training mode','训练模式','Modo de práctica','トレーニング','훈련 모드','Режим'],
grid:['Gridshot','Gridshot','网格射击','Gridshot','グリッドショット','그리드샷','Gridshot'],
flick:['Flick','Flick','甩枪','Flick','フリック','플릭','Флик'],
prec:['Presisi (kecil)','Precision (small)','精准（小目标）','Precisión (pequeño)','精密（小）','정밀 (작게)','Точность (мелкие)'],
track:['Tracking','Tracking','追踪','Seguimiento','トラッキング','트래킹','Трекинг'],
react:['Reaksi','Reaction','反应','Reacción','リアクション','반응속도','Реакция'],
sw:['Ganti target','Target switch','目标切换','Cambio de objetivo','ターゲット切替','타깃 전환','Смена целей'],
dur:['Durasi','Duration','时长','Duración','時間','시간','Длительность'],
diff:['Kesulitan','Difficulty','难度','Dificultad','難易度','난이도','Сложность'],
d1:['Pemula','Easy','入门','Fácil','かんたん','쉬움','Легко'],d2:['Menengah','Normal','中级','Normal','ふつう','보통','Нормально'],d3:['Sulit','Hard','困难','Difícil','むずかしい','어려움','Сложно'],d4:['Pro','Pro','专家','Pro','プロ','프로','Профи'],
mouse:['Mouse & sensitivitas','Mouse & sensitivity','鼠标与灵敏度','Ratón y sensibilidad','マウスと感度','마우스 & 감도','Мышь и чувствительность'],
game:['Game','Game','游戏','Juego','ゲーム','게임','Игра'],sens:['Sensitivitas in-game','In-game sensitivity','游戏内灵敏度','Sensibilidad en juego','ゲーム内感度','인게임 감도','Чувствительность в игре'],
yaw:['Yaw (° per count)','Yaw (° per count)','Yaw（每count度数）','Yaw (° por count)','Yaw（count毎の度）','Yaw (count당 °)','Yaw (° за count)'],
fov:['FOV horizontal (°)','Horizontal FOV (°)','水平视场角 (°)','FOV horizontal (°)','水平FOV (°)','수평 FOV (°)','Гориз. FOV (°)'],
cal:['Kalibrasi 360°','Calibrate 360°','校准360°','Calibrar 360°','360°キャリブレーション','360° 보정','Калибровка 360°'],
calh:['Klik arena → tekan C → gerakkan mouse sejauh jarak 360° (pakai penggaris) → tekan C lagi. Faktor koreksi dihitung otomatis.','Click arena → press C → move the mouse exactly your 360° distance (use a ruler) → press C again. The correction factor is computed for you.','点击场景→按C→按尺子移动鼠标一个360°距离→再按C。系统自动计算修正系数。','Clic en la arena → pulsa C → mueve el ratón tu distancia de 360° (con regla) → pulsa C otra vez.','アリーナをクリック→Cキー→定規で360°分の距離だけマウスを動かす→再度C。補正係数を自動計算します。','아레나 클릭 → C → 자로 360° 거리만큼 마우스 이동 → 다시 C. 보정값이 자동 계산됩니다.','Клик по арене → C → проведите мышью дистанцию 360° (линейкой) → C. Коэффициент рассчитается сам.'],
reset_cal:['Reset koreksi','Reset correction','重置修正','Restablecer','補正リセット','보정 초기화','Сбросить'],
start:['MULAI','START','开始','INICIAR','スタート','시작','СТАРТ'],resume:['LANJUT','RESUME','继续','CONTINUAR','再開','계속','ПРОДОЛЖИТЬ'],
reset:['Reset','Reset','重置','Reiniciar','リセット','초기화','Сброс'],end:['Akhiri','End','结束','Terminar','終了','종료','Завершить'],
fs:['Layar penuh','Fullscreen','全屏','Pantalla completa','全画面','전체화면','Во весь экран'],xfs:['Keluar layar penuh','Exit fullscreen','退出全屏','Salir de pantalla completa','全画面解除','전체화면 종료','Выйти из полноэкранного'],
ready:['Siap?','Ready?','准备好了吗？','¿Listo?','準備はいい？','준비됐나요?','Готовы?'],paused:['Jeda','Paused','已暂停','Pausa','一時停止','일시정지','Пауза'],done:['Selesai','Finished','训练完成','Terminado','終了','완료','Готово'],
hint:['Klik MULAI → mouse terkunci. ESC = jeda. Kunci: Enter mulai · R reset · Q akhiri · F layar penuh · C kalibrasi','Click START → mouse locks. ESC = pause. Keys: Enter start · R reset · Q end · F fullscreen · C calibrate','点击开始→鼠标锁定。ESC暂停。快捷键：Enter开始·R重置·Q结束·F全屏·C校准','Clic INICIAR → ratón bloqueado. ESC = pausa. Teclas: Enter · R · Q · F · C','スタートでマウスロック。ESCで一時停止。Enter/R/Q/F/C','시작 클릭 → 마우스 고정. ESC = 일시정지. Enter·R·Q·F·C','СТАРТ → мышь захвачена. ESC = пауза. Enter·R·Q·F·C'],
hits:['Hit','Hits','命中','Aciertos','命中','적중','Попад.'],acc:['Akurasi','Accuracy','准确率','Precisión','精度','정확도','Точность'],score:['Skor','Score','得分','Puntos','スコア','점수','Счёт'],time:['Waktu','Time','时间','Tiempo','時間','시간','Время'],ttk:['Rata² waktu/hit','Avg time/hit','平均用时','Tiempo medio','平均時間','평균 시간','Ср. время'],
hist:['Riwayat','History','历史记录','Historial','履歴','기록','История'],none:['Belum ada sesi.','No sessions yet.','暂无记录。','Sin sesiones.','記録なし。','기록 없음.','Нет сессий.'],
out:['Keluar','Log out','退出','Salir','ログアウト','로그아웃','Выйти'],toLogin:['Login / Daftar','Log in / Sign up','登录/注册','Entrar / Registro','ログイン/登録','로그인/가입','Вход/Регистрация'],
guestb:['Tamu','Guest','游客','Invitado','ゲスト','게스트','Гость'],synced:['Tersinkron','Synced','已同步','Sincronizado','同期済み','동기화됨','Синхр.'],
mdesc:['Mouse lock + raw input aktif: gerakan fisik mouse = putaran sudut asli game.','Pointer lock + raw input: physical mouse travel = true in-game rotation.','指针锁定+原始输入：鼠标物理位移=真实游戏转角。','Bloqueo + entrada cruda: el movimiento físico = rotación real del juego.','ポインタロック+Raw入力：物理移動=実際の回転角。','포인터 잠금+Raw 입력: 물리 이동 = 실제 게임 회전.','Захват + raw input: физический ход мыши = реальный поворот.'],
sup:['Layout & kontrol terbaik di desktop dengan mouse.','Best experienced on desktop with a mouse.','建议在电脑上使用鼠标。','Mejor en escritorio con ratón.','マウス付きのPC推奨。','마우스가 있는 PC 권장.','Лучше на ПК с мышью.'],
micro:['Micro-adjust','Micro-adjust','微调','Micro-ajuste','マイクロ調整','마이크로 보정','Микрокоррекция'],
peek:['Peek & Shoot','Peek & Shoot','探头射击','Peek y disparo','ピーク&ショット','피크 & 샷','Пик и выстрел'],
strafe:['Strafe Duel','Strafe duel','横移对枪','Duelo strafe','ストレイフ対決','스트레이프 듀얼','Дуэль на страфе'],
counter:['Counter-strafe','Counter-strafe','反向急停','Counter-strafe','カウンターストレイフ','카운터 스트레이프','Контрстрейф'],
prog:['Progres','Progress','进度','Progreso','進捗','진행 상황','Прогресс'],
focus:['Fokus latihan berikutnya:','Next focus:','下一个重点：','Próximo foco:','次の重点：','다음 집중:','Следующий фокус:'],
how_micro:['Target kecil muncul dekat crosshair: koreksi halus, jangan overshoot.','Small targets appear near your crosshair: fine corrections, no overshoot.','小目标出现在准星附近：精细修正，避免过冲。','Objetivos pequeños cerca de la mira: correcciones finas, sin pasarte.','照準付近に小ターゲット：行き過ぎずに微調整。','조준점 근처에 작은 타깃: 오버슈트 없이 미세 보정.','Мелкие цели рядом с прицелом: точные поправки без перелёта.'],
how_peek:['Target muncul sebentar dari sudut: tahan crosshair setinggi kepala, tembak sebelum hilang.','A target peeks briefly: hold head-level crosshair, shoot before it hides.','目标短暂探头：准星保持头部高度，在其消失前开枪。','Un objetivo asoma brevemente: mira a la cabeza y dispara antes de que se esconda.','ターゲットが一瞬現れる：頭の高さで待ち、消える前に撃つ。','타깃이 잠깐 나타남: 머리 높이로 대기, 사라지기 전에 사격.','Цель выглядывает ненадолго: держите прицел на уровне головы и стреляйте.'],
how_strafe:['Target bergerak menyamping dan berganti arah acak: tracking lalu tembak.','The target strafes and changes direction randomly: track, then shoot.','目标左右移动并随机变向：跟随后开枪。','El objetivo se mueve y cambia de dirección: sigue y dispara.','ターゲットが左右に動き方向転換：追って撃つ。','타깃이 좌우로 움직이며 방향을 바꿈: 따라가며 사격.','Цель страфит и меняет направление: следите и стреляйте.'],
how_counter:['Tahan A/D, lalu tekan arah berlawanan untuk berhenti seketika, baru tembak. Menembak saat bergerak = peluru melenceng. Stop bersih = bonus.','Hold A/D, tap the opposite key to stop instantly, then shoot. Shooting while moving spreads your shots. Clean stop = bonus.','按住A/D，再按反方向键瞬停后开枪。移动中开枪会散布。完美急停有奖励。','Mantén A/D, pulsa la opuesta para frenar y dispara. En movimiento los disparos se dispersan. Parada limpia = bonus.','A/Dを押し、逆キーで即停止してから撃つ。移動中は弾がブレる。綺麗な停止でボーナス。','A/D를 누른 뒤 반대 키로 즉시 정지 후 사격. 이동 중 사격은 탄이 퍼짐. 깔끔한 정지 = 보너스.','Зажмите A/D, нажмите противоположную для остановки и стреляйте. В движении — разброс. Чистая остановка = бонус.'],
guide:['Panduan','Guide','指南','Guía','ガイド','가이드','Гайд']};
var lang='id';
function t(k){var a=D[k];return a?(a[LANGS.indexOf(lang)]||a[1]||a[0]):k}
function apply(){document.documentElement.lang=lang;document.querySelectorAll('[data-i]').forEach(function(e){e.textContent=t(e.dataset.i)});document.querySelectorAll('[data-ph]').forEach(function(e){e.placeholder=t(e.dataset.ph)});document.dispatchEvent(new Event('langchange'))}
function set(l){if(LANGS.indexOf(l)<0)l='id';lang=l;try{localStorage.setItem('aimdojoLang',l)}catch(e){}var s=document.getElementById('langSel');if(s)s.value=l;apply()}
function init(){var l;try{l=localStorage.getItem('aimdojoLang')}catch(e){}if(!l){var n=((navigator.languages||[navigator.language||'id'])[0]||'id').slice(0,2).toLowerCase();l=LANGS.indexOf(n)>=0?n:'en'}
var s=document.getElementById('langSel');if(s){s.innerHTML=LANGS.map(function(c){return'<option value="'+c+'">'+NAMES[c]+'</option>'}).join('');s.onchange=function(){set(s.value)}}set(l)}
window.L={t:t,set:set,init:init,get lang(){return lang}};
})();
