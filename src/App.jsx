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

      {/* Header - Perfect Alignment & Logo Recovery */}
      <header className="absolute top-0 left-0 w-full px-8 py-8 flex items-center justify-between z-50 max-w-7xl mx-auto right-0">
        <img
          src="/voice_guard.logo.svg"
          alt="Voice Guard Logo"
          className="h-10 w-auto bg-transparent block"
        />
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a href="#" className="hover:text-white transition-colors">솔루션</a>
          <a href="#" className="hover:text-white transition-colors">기능</a>
          <a href="#" className="hover:text-white transition-colors">고객사례</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-8 pt-48 md:pt-64 pb-32 flex flex-col items-center text-center">
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
          className="text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tight mb-8 text-white leading-tight"
          style={{ wordBreak: 'keep-all', textShadow: '0 4px 24px rgba(0,0,0,0.5)' }}>
          단 1초. <br className="md:hidden" />서류 없는 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">요양원의 시작.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl lg:text-[22px] mb-16 leading-relaxed max-w-2xl font-light"
          style={{ color: '#9CA3AF' }}>
          음성 하나로 완성되는 요양 일지. 공단 평가 완벽 방어.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsModalOpen(true)}
          className="text-white font-bold text-lg lg:text-xl px-10 py-5 rounded-2xl shadow-[0_8px_32px_rgba(0,87,255,0.3)] hover:shadow-[0_20px_48px_rgba(0,87,255,0.5)] flex items-center justify-center cursor-pointer border border-blue-400/20 backdrop-blur-sm"
          style={{ background: 'linear-gradient(135deg, #0057FF 0%, #003db3 100%)' }}>
          무료로 환수 리스크 진단받기
        </motion.button>
      </main>

      {/* Bento Grid Section - Dark Glassmorphism */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(0,87,255,0.15)' }}
            className="backdrop-blur-2xl border p-12 rounded-[32px] transition-all duration-300 flex flex-col group relative overflow-hidden"
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
            whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(0,87,255,0.15)' }}
            className="backdrop-blur-2xl border p-12 rounded-[32px] transition-all duration-300 flex flex-col group relative overflow-hidden"
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
            whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(0,87,255,0.15)' }}
            className="backdrop-blur-2xl border p-12 rounded-[32px] transition-all duration-300 flex flex-col group relative overflow-hidden"
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
