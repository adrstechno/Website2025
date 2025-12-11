import { useNavigate } from 'react-router-dom';
import { HiOutlineDocumentText } from 'react-icons/hi';

const SocialPopup = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-6 right-6 z-50 lg:bottom-8 lg:right-8">
      <button
        onClick={() => navigate('/apply')}
        aria-label="Open application page"
        className="w-14 h-14 rounded-full bg-purple-600 hover:bg-purple-700 
        text-white shadow-lg flex items-center justify-center 
        focus:outline-none focus:ring-2 focus:ring-purple-400"
        title="Open application form"
      >
        <HiOutlineDocumentText className="w-7 h-7" />
      </button>
    </div>
  );
};

export default SocialPopup;
