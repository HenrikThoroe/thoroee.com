export default function LogoItem(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 800 800"
      fill="#000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="150" height="800" rx="20" fill="inherit" />
      <rect x="650" width="150" height="800" rx="20" fill="inherit" />
      <rect x="300" width="200" height="300" rx="20" fill="inherit" />
      <rect x="300" y="500" width="200" height="300" rx="20" fill="inherit" />
    </svg>
  )
}
