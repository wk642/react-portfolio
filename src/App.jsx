import './index.css';
import profilePicture from './assets/profilePicture.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import SocialMedia from './components/SocialMedia';

export default function App() {
  return (
    <>
      <main className="font-tillana">
        <header className="bg-gray-300 py-8 mt-5">
          <div className="container mx-auto flex flex-col items-center">
            <img
              src={profilePicture}
              alt="Profile picture of Winnie Kelley"
              className="rounded-full w-32 h-32 object-cover shadow-md"
            />
            <h1 className="text-orange-500 text-center text-6xl mt-6">
              Winnie Kelley
            </h1>
            <p className="text-gray-600 text-lg mt-2">Software Engineer</p>
          </div>
        </header>

        <main className="container mx-auto py-12">
          <div className="flex flex-row gap-8">
            <section className="mb-10 flex-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
              <p className="text-gray-700 leading-relaxed">
                Hello! I'm Winnie, and I'm passionate about learning new things and having a growth mindset. I enjoy creating memories with my family and taking steps to creating video games.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                I'm currently based in Tennessee, and am seeking remote opportunities.
              </p>
            </section>

            <section className="mb-10 flex-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Tech Stack</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>REACT</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Tailwind</li>
                <li>Postgress</li>
                <li>Epress</li>
                <li>Node</li>
              </ul>
            </section>

            <section className="mb-10 flex-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact</h2>
              <p className="text-gray-700">
                Feel free to reach out! You can connect with me via email{' '}
                <a href="mailto:w642kelley@gmail.com" className="text-orange-500 hover:underline">
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </a>
              </p>
            </section>
          </div>
        </main>

        <footer className="bg-gray-300 py-4 text-center text-gray-600 text-sm flex flex-col items-center">
          <SocialMedia />
          <div className="flex justify-around w-full mt-2">
            <p>Winnie Kelley</p>
            <p>2025</p>
          </div>
        </footer>
      </main>
    </>
  );
}