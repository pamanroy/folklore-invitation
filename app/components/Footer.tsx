import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="text-sm text-center md:text-left">
      <p>
        illustration by{' '}
        <Link href="https://stock.adobe.com/id/contributor/208728469/simple-line" target="_blank" className="underline">
          simple line
        </Link>
      </p>
      <p>website by uncle roy</p>
    </footer>
  )
}
