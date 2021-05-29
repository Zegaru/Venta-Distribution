import SolidButton from '../../components/SolidButton';

export default function NotFound() {
  return (
    <section className="text-gray-700 body-font font-proxima-nova">
      <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
        <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
          <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
            Error
            <br className="hidden lg:inline-block" />
            <span className="ml-2 sm:ml-0">404</span>
          </h1>
          <p className="mb-8 leading-relaxed">
            Ups! La página que busca no existe
          </p>
          <div className="flex justify-center">
            <SolidButton href="/">REGRESAR</SolidButton>
          </div>
        </div>
      </div>
    </section>
  );
}
