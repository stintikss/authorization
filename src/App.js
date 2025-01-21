import React from 'react';
import { useSpring, animated } from '@react-spring/web';

function App() {
  const formAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-30px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 150, friction: 20 },
  });

  const [hoverAnimation, setHoverAnimation] = useSpring(() => ({
    scale: 1,
    config: { tension: 300, friction: 10 },
  }));

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-animation">
      <animated.div
        style={formAnimation}
        className="w-full max-w-2xl p-12 bg-white rounded-3xl shadow-2xl"
      >
        <h1 className="text-4xl font-bold text-center text-gray-800">Добро пожаловать!</h1>
        <p className="mt-4 text-lg text-center text-gray-600">
          Войдите в свой аккаунт для продолжения
        </p>
        <form className="mt-8">
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700" htmlFor="email">
              Электронная почта
            </label>
            <input
              id="email"
              type="email"
              placeholder="Введите вашу почту"
              className="w-full px-5 py-3 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-8">
            <label className="block text-lg font-semibold text-gray-700" htmlFor="password">
              Пароль
            </label>
            <input
              id="password"
              type="password"
              placeholder="Введите ваш пароль"
              className="w-full px-5 py-3 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <animated.button
            type="submit"
            style={hoverAnimation}
            onMouseEnter={() => setHoverAnimation.start({ scale: 1.05 })}
            onMouseLeave={() => setHoverAnimation.start({ scale: 1 })}
            className="w-full px-6 py-3 text-lg font-bold text-white bg-blue-500 rounded-xl shadow-xl hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Войти
          </animated.button>
        </form>
        <p className="mt-6 text-lg text-center text-gray-600">
          Еще нет аккаунта?{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Зарегистрируйтесь
          </a>
        </p>
      </animated.div>
    </div>
  );
}

export default App;
