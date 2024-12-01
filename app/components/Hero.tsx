import Image from 'next/image'

interface ButtonProps {
  isRecording: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ isRecording, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-4 rounded-full bg-[#FF4500] hover:bg-[#FF6B6B] focus:outline-none focus:ring-2 focus:ring-[#FF4500] transition-all duration-300"
    >
      <Image
        src="/mic-icon.svg"
        alt="Microphone"
        width={48}
        height={48}
        className={`transition-all duration-300 ${isRecording ? 'text-white' : 'text-[#FF4500]'}`}
      />
    </button>
  );
};

export default Button;

