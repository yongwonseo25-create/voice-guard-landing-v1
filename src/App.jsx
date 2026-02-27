import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileWarning, Clock } from 'lucide-react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    facilityName: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // GHL Webhook Placeholder
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsModalOpen(false);
    setToastMessage('진단 신청이 완료되었습니다. 5분 내로 카카오톡 알림톡이 발송됩니다.');
    setFormData({ name: '', email: '', phone: '', facilityName: '' });

    setTimeout(() => {
      setToastMessage('');
    }, 5000);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen font-sans overflow-x-hidden selection:bg-medical-blue selection:text-white pb-48 relative" style={{ backgroundColor: '#0A192F', color: 'white' }}>

      {/* Cinematic Blue Luminescence Animated Background */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] rounded-full blur-[140px] pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(0,87,255,0.4) 0%, rgba(10,25,47,0) 70%)' }}>
      </motion.div>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="fixed bottom-0 right-0 w-[800px] h-[800px] translate-x-1/3 translate-y-1/3 rounded-full blur-[160px] pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(0,87,255,0.3) 0%, rgba(10,25,47,0) 70%)' }}>
      </motion.div>

      {/* Header - Sticky & Perfect Logo Recovery & Navigation Links */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0A192F]/80 backdrop-blur-md border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <a href="#" className="flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 60" className="h-[40px] w-auto text-white fill-current block">
              <rect width="240" height="60" fill="transparent" />
              <text x="10" y="40" fill="currentColor" fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="800" fontSize="28" letterSpacing="-1">VOICE GUARD</text>
              <circle cx="215" cy="30" r="8" fill="#0057FF" />
            </svg>
          </a>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <a href="#solution" className="hover:text-white transition-colors">솔루션</a>
            <a href="#features" className="hover:text-white transition-colors">기능</a>
            <a href="#cases" className="hover:text-white transition-colors">고객사례</a>
          </nav>
        </div>
      </header>

      {/* Hero Section - 100vh Compressed */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-8 min-h-[100vh] flex flex-col justify-center items-center text-center pt-28 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
          style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}
        >
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="text-sm font-medium tracking-wide text-blue-200">대한민국 1등 요양원 AI 관제탑</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tight mb-4 text-white leading-tight"
          style={{ wordBreak: 'keep-all', textShadow: '0 4px 24px rgba(0,0,0,0.5)' }}>
          단 1초. <br className="md:hidden" />서류 없는 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">요양원의 시작.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl lg:text-[22px] mb-8 leading-relaxed max-w-2xl font-light"
          style={{ color: '#9CA3AF' }}>
          음성 하나로 완성되는 요양 일지. 공단 평가 완벽 방어.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative group mt-4 mb-4"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-[24px] blur opacity-40 group-hover:opacity-80 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          <motion.button
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsModalOpen(true)}
            className="relative text-white font-bold text-lg lg:text-xl px-12 py-5 rounded-2xl shadow-[0_8px_32px_rgba(0,87,255,0.3)] flex items-center justify-center cursor-pointer border border-blue-400/20 backdrop-blur-sm w-full"
            style={{ background: 'linear-gradient(135deg, #0057FF 0%, #003db3 100%)' }}>
            무료로 환수 리스크 진단받기
          </motion.button>
        </motion.div>

        {/* Partner Logos - Marquee moved inside Hero */}
        <div className="w-screen border-y border-white/5 bg-white/[0.01] py-8 mt-auto overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 mb-6 text-center">
            <p className="text-gray-400 text-sm font-medium tracking-widest uppercase">대한민국 상위 1% 요양원들이 선택한 보이스 가드</p>
          </div>
          <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex shrink-0 animate-marquee gap-16 md:gap-32 items-center justify-around min-w-full px-8 opacity-40 grayscale">
              <div className="text-2xl font-bold flex items-center gap-3"><div className="w-8 h-8 bg-white/20 rounded-full"></div>효라밸 요양원</div>
              <div className="text-2xl font-bold flex items-center gap-3"><div className="w-8 h-8 rounded-md bg-white/20"></div>A+ 복지센터</div>
              <div className="text-2xl font-bold flex items-center gap-3"><div className="w-8 h-8 transform rotate-45 bg-white/20"></div>온유한집</div>
              <div className="text-2xl font-bold flex items-center gap-3"><div className="w-8 h-8 rounded-t-full bg-white/20"></div>실버 스마트</div>
              <div className="text-2xl font-bold flex items-center gap-3"><div className="w-8 h-8 bg-white/20 rounded-full"></div>효라밸 요양원</div>
              <div className="text-2xl font-bold flex items-center gap-3"><div className="w-8 h-8 rounded-md bg-white/20"></div>A+ 복지센터</div>
            </div>
            <div aria-hidden="true" className="flex shrink-0 animate-marquee gap-16 md:gap-32 items-center justify-around min-w-full px-8 opacity-40 grayscale">
              <div className="text-2xl font-bold flex items-center gap-3"><div className="w-8 h-8 bg-white/20 rounded-full"></div>효라밸 요양원</div>
              <div className="text-2xl font-bold flex items-center gap-3"><div className="w-8 h-8 rounded-md bg-white/20"></div>A+ 복지센터</div>
              <div className="text-2xl font-bold flex items-center gap-3"><div className="w-8 h-8 transform rotate-45 bg-white/20"></div>온유한집</div>
              <div className="text-2xl font-bold flex items-center gap-3"><div className="w-8 h-8 rounded-t-full bg-white/20"></div>실버 스마트</div>
              <div className="text-2xl font-bold flex items-center gap-3"><div className="w-8 h-8 bg-white/20 rounded-full"></div>효라밸 요양원</div>
              <div className="text-2xl font-bold flex items-center gap-3"><div className="w-8 h-8 rounded-md bg-white/20"></div>A+ 복지센터</div>
            </div>
          </div>
        </div>
      </main>

      {/* Cloud Voucher Banner (Solution) */}
      <section id="solution" className="relative z-10 w-full bg-red-600/10 border-y border-red-500/30 py-8 scroll-mt-20 min-h-[100vh] flex flex-col justify-center group hover:bg-red-600/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-block bg-red-500/20 text-red-200 text-xs font-bold px-3 py-1 rounded-full border border-red-500/30 mb-3 animate-pulse">긴급 마감 임박</div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ wordBreak: 'keep-all' }}>2025 클라우드 바우처 수요기업 모집</h3>
            <p className="text-red-200 text-lg">최대 <span className="font-bold text-white">1,550만 원</span> (80% 국고 지원) - 3월 중순 선착순 마감</p>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="flex-shrink-0 bg-red-600 hover:bg-red-500 text-white font-bold py-4 px-8 rounded-xl shadow-[0_4px_16px_rgba(220,38,38,0.5)] transition-all whitespace-nowrap">
            도입 혜택 상담하기
          </button>
        </div>
      </section>

      {/* Bento Grid Section - Dark Glassmorphism */}
      <section id="features" className="relative z-10 w-full max-w-7xl mx-auto px-8 scroll-mt-20 min-h-[100vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -16, boxShadow: '0 32px 80px rgba(0,87,255,0.25)' }}
            className="backdrop-blur-2xl border p-12 rounded-[32px] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col group relative overflow-hidden"
            style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center relative shadow-lg" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <ShieldCheck className="w-8 h-8 text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
            </div>
            <h3 className="text-[28px] font-bold mb-6 text-white leading-tight" style={{ wordBreak: 'keep-all' }}>기록 누락 0건.<br />A등급의 완성.</h3>
            <p className="leading-relaxed text-lg" style={{ wordBreak: 'keep-all', color: '#9CA3AF' }}>
              욕구사정 한 줄, 상태변화 기록 한 장의 누락도 허용하지 않습니다. 빈틈없는 인공지능이 모든 기록을 추적합니다.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -16, boxShadow: '0 32px 80px rgba(0,87,255,0.25)' }}
            className="backdrop-blur-2xl border p-12 rounded-[32px] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col group relative overflow-hidden"
            style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center relative shadow-lg" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <FileWarning className="w-8 h-8 text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
            </div>
            <h3 className="text-[28px] font-bold mb-6 text-white leading-tight" style={{ wordBreak: 'keep-all' }}>수천만 원 환수 폭탄,<br />원천 차단.</h3>
            <p className="leading-relaxed text-lg" style={{ wordBreak: 'keep-all', color: '#9CA3AF' }}>
              근무 후 몰아쓰는 수기 일지는 법원에서 방패가 되지 못합니다. 음성 명령 즉시 타임스탬프와 함께 위변조 불가능한 기록이 생성됩니다.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -16, boxShadow: '0 32px 80px rgba(0,87,255,0.25)' }}
            className="backdrop-blur-2xl border p-12 rounded-[32px] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col group relative overflow-hidden"
            style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center relative shadow-lg" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <Clock className="w-8 h-8 text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
            </div>
            <h3 className="text-[28px] font-bold mb-6 text-white leading-tight" style={{ wordBreak: 'keep-all' }}>하루 2시간의 잔업,<br />단 1초로.</h3>
            <p className="leading-relaxed text-lg" style={{ wordBreak: 'keep-all', color: '#9CA3AF' }}>
              퇴근을 가로막던 수기 일지 작성. 이제 스마트폰에 대고 말하는 단 1초면 끝납니다. 원장님의 귀중한 시간을 되찾으세요.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Wall of Love Section */}
      <section id="cases" className="relative z-10 w-full max-w-7xl mx-auto px-8 scroll-mt-20 min-h-[100vh] flex flex-col justify-center">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight" style={{ wordBreak: 'keep-all' }}>도입 즉시 A등급, <br className="md:hidden" />원장님들의 진짜 후기</h2>
          <p className="text-gray-400 text-xl font-light">보이스 가드와 함께 환수 리스크를 완벽하게 차단했습니다.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "김ㅇㅇ 원장 (효라밸 요양원)", quote: "수기 일지 쓰느라 매일 2시간씩 야근하던 선생님들이 이제 정시에 퇴근합니다. 가장 확실한 복지네요." },
            { name: "이ㅇㅇ 대표 (A+ 복지센터)", quote: "공단 평가관이 오셨을 때 보이스 가드 기록을 보여드렸더니 더 이상 묻지 않으시더군요. 든든합니다." },
            { name: "박ㅇㅇ 시설장 (온유한집)", quote: "상태변화 기록을 말로만 하면 되니 기록 누락이 0건이 되었습니다. 환수 걱정에서 완전히 해방됐습니다." }
          ].map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(0,87,255,0.1)' }}
              className="backdrop-blur-xl border p-10 rounded-[32px] flex flex-col gap-8 transition-all duration-500"
              style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}>
              <div className="flex gap-2 text-yellow-400">
                {"★★★★★".split('').map((star, i) => <span key={i} className="text-2xl drop-shadow-[0_0_12px_rgba(250,204,21,0.6)]">{star}</span>)}
              </div>
              <p className="text-gray-300 text-xl leading-relaxed flex-grow font-light" style={{ wordBreak: 'keep-all' }}>"{review.quote}"</p>
              <div className="flex items-center gap-4 border-t border-white/10 pt-8 mt-4">
                <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300 font-bold border border-blue-500/30 text-lg">
                  {review.name.charAt(0)}
                </div>
                <div className="text-lg font-medium text-white">{review.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0A192F]/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="border p-8 rounded-[32px] w-full max-w-md relative shadow-2xl"
            style={{ backgroundColor: 'rgba(10,25,47,0.95)', borderColor: 'rgba(255,255,255,0.1)' }}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>
            <h2 className="text-3xl font-bold text-white mb-2">무료 진단 신청</h2>
            <p className="text-gray-400 mb-8">간단한 정보만 남겨주시면 즉시 분석해 드립니다.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">이름</label>
                <input required type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600" placeholder="홍길동" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">이메일</label>
                <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600" placeholder="example@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">전화번호</label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600" placeholder="010-0000-0000" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">요양원명</label>
                <input required type="text" name="facilityName" value={formData.facilityName} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600" placeholder="희망요양원" />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-white font-bold text-lg px-8 py-4 rounded-xl shadow-[0_8px_32px_rgba(0,87,255,0.4)] hover:shadow-[0_16px_48px_rgba(0,87,255,0.6)] transform hover:-translate-y-1 transition-all flex items-center justify-center disabled:opacity-50 disabled:transform-none mt-4"
                style={{ background: 'linear-gradient(135deg, #0057FF 0%, #003db3 100%)' }}
              >
                {isSubmitting ? '전송 중...' : '환수 리스크 무료 진단받기'}
              </button>
            </form>
          </motion.div>
        </div>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 50, x: '-50%' }}
          className="fixed bottom-8 left-1/2 z-[200] border border-blue-500/30 px-8 py-5 rounded-full shadow-[0_16px_48px_rgba(0,87,255,0.3)] flex items-center gap-4 backdrop-blur-xl"
          style={{ backgroundColor: 'rgba(10,25,47,0.95)' }}
        >
          <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <span className="font-semibold text-[17px] text-white tracking-wide">{toastMessage}</span>
        </motion.div>
      )}

    </div>
  );
}

export default App;
