import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Command,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Image,
  Loader2,
  LucideProps,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  Trash,
  Twitter,
  User,
  X,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  logo: Command,
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  twitter: Twitter,
  check: Check,
  google: ({ ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      enableBackground="new 0 0 128 128"
      id="Social_Icons"
      version="1.1"
      viewBox="0 0 128 128"
      xmlSpace="preserve"
      {...props}
    >
      <g id="_x31__stroke">
        <g id="Google">
          <rect
            clipRule="evenodd"
            fill="none"
            fillRule="evenodd"
            height="128"
            width="128"
          />
          <path
            clipRule="evenodd"
            d="M27.585,64c0-4.157,0.69-8.143,1.923-11.881L7.938,35.648    C3.734,44.183,1.366,53.801,1.366,64c0,10.191,2.366,19.802,6.563,28.332l21.558-16.503C28.266,72.108,27.585,68.137,27.585,64"
            fill="#FBBC05"
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d="M65.457,26.182c9.031,0,17.188,3.2,23.597,8.436L107.698,16    C96.337,6.109,81.771,0,65.457,0C40.129,0,18.361,14.484,7.938,35.648l21.569,16.471C34.477,37.033,48.644,26.182,65.457,26.182"
            fill="#EA4335"
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d="M65.457,101.818c-16.812,0-30.979-10.851-35.949-25.937    L7.938,92.349C18.361,113.516,40.129,128,65.457,128c15.632,0,30.557-5.551,41.758-15.951L86.741,96.221    C80.964,99.86,73.689,101.818,65.457,101.818"
            fill="#34A853"
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d="M126.634,64c0-3.782-0.583-7.855-1.457-11.636H65.457v24.727    h34.376c-1.719,8.431-6.397,14.912-13.092,19.13l20.474,15.828C118.981,101.129,126.634,84.861,126.634,64"
            fill="#4285F4"
            fillRule="evenodd"
          />
        </g>
      </g>
    </svg>
  ),
  linkedin: ({ ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 100 100"
      viewBox="0 0 100 100"
      id="linkedin"
    >
      <path
        fill="#0077b5"
        d="M90.479,2.513c-14.611-0.041-68.502,0.028-80.958,0C5.645,2.513,2.5,5.562,2.5,9.317v81.381
			c0,3.756,3.145,6.802,7.021,6.802h80.958c3.878,0,7.021-3.046,7.021-6.803V9.317C97.5,5.562,94.357,2.513,90.479,2.513z"
      ></path>
      <path
        fill="#f1f1f1"
        d="M53.453 82.005c0 0 0-23.878 0-23.879-.139-4.388 2.484-8.483 7.762-8.667 5.143 0 7.201 3.921 7.201 9.67v22.875h14.214V57.485c0-13.135-7.012-19.247-16.365-19.247-7.668 0-11.036 4.285-12.907 7.204l.095-6.2H39.239c.185 4.012-.001 42.763-.001 42.763L53.453 82.005zM31.37 63.461v-24.22H17.154v42.763h14.217C31.368 77.514 31.376 67.888 31.37 63.461zM24.265 33.404c4.956 0 8.042-3.284 8.042-7.387-.041-9.897-16.004-9.787-15.991-.001C16.305 30.151 19.476 33.455 24.265 33.404z"
      ></path>
    </svg>
  ),
}
