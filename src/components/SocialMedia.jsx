import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function SocialMedia() {
  return (
    <div className="flex justify-center gap-6 mt-4">
      <a
        href="https://github.com/wk642"
        target="_blank"
        className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
      >
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
      <a
        href="https://linkedin.com/in/w642kelley"
        target="_blank"
        className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
      >
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </a>
      <a
        href="https://www.youtube.com/@BuildByteByByte" 
        target="_blank"
        className="text-gray-600 hover:text-red-500 transition-colors duration-300"
      >
        <FontAwesomeIcon icon={faYoutube} size="lg" />
      </a>
    </div>
  );
}