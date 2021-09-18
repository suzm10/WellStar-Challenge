import Link from 'next/link'
import { useState } from 'react'
import NavItem from '../Navitem'
import NavItemText from '../NavItemText'
import SearchIcon from '@material-ui/icons/Search'

const PatientsNavbar = (props) => {
    const [active, setActive] = useState(false)
    const handlePressed = () => { setActive(!active) }

    return (
        <div>
            <nav className='flex items-center flex-wrap bg-white-base p-3 shadow-md'>
                <Link href='/'>
                    <a className='inline-flex items-center p-2 mr-4 -ml-5'>
                        <svg
                            width="170"
                            height="30"
                            viewBox="0 0 405 96"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M30.0338 11.6266C36.997 4.45973 46.4794 0.289058 56.4677 0.000162243C56.6159 -0.00236484 56.7632 0.0246517 56.9009 0.0796358C57.0386 0.13462 57.1639 0.216471 57.2696 0.320413C57.3753 0.424356 57.4593 0.548309 57.5166 0.685042C57.5739 0.821776 57.6034 0.968551 57.6034 1.11681V19.1861C52.6372 19.1842 47.8637 21.1074 44.2859 24.5515C40.7081 27.9957 38.6046 32.6925 38.4174 37.6552C38.4093 37.8494 38.3273 38.0331 38.1881 38.1688C38.0489 38.3044 37.8631 38.3817 37.6688 38.3848H19.1743C19.1751 28.3923 23.0706 18.7936 30.0338 11.6266ZM11.636 65.9762C4.46977 59.0184 0.296257 49.5424 0.000883603 39.5585C-0.00510037 39.4082 0.0193575 39.2582 0.0727888 39.1176C0.12622 38.9769 0.207522 38.8485 0.311815 38.7401C0.416107 38.6316 0.541237 38.5454 0.679693 38.4865C0.818149 38.4277 0.967074 38.3974 1.11753 38.3975H19.1869C19.1865 43.3632 21.1103 48.1358 24.554 51.7133C27.9978 55.2908 32.6938 57.3947 37.6559 57.5835C37.8495 57.5899 38.0332 57.6706 38.1691 57.8088C38.3049 57.947 38.3824 58.1321 38.3855 58.3258V76.8265C28.3973 76.8259 18.8022 72.9339 11.636 65.9762ZM39.5466 95.9998C49.53 95.7029 59.005 91.5289 65.9625 84.363C72.9199 77.1971 76.8124 67.603 76.8146 57.6152H58.3138C58.2155 57.616 58.1183 57.6362 58.0278 57.6746C57.9373 57.713 57.8552 57.7689 57.7863 57.839C57.7174 57.9091 57.6629 57.9921 57.6261 58.0832C57.5892 58.1744 57.5707 58.2719 57.5715 58.3702C57.3764 63.3278 55.2696 68.0174 51.6928 71.4558C48.116 74.8942 43.347 76.8144 38.3856 76.8139V94.8832C38.3855 95.0314 38.415 95.1782 38.4723 95.315C38.5296 95.4517 38.6136 95.5756 38.7193 95.6796C38.825 95.7835 38.9504 95.8654 39.0881 95.9204C39.2257 95.9753 39.373 96.0024 39.5212 95.9998H39.5466ZM84.3656 30.0406C91.5332 37.0009 95.7067 46.4801 96.0004 56.4668C96.0047 56.6166 95.9788 56.7658 95.9242 56.9053C95.8696 57.0449 95.7874 57.1721 95.6826 57.2793C95.5778 57.3864 95.4525 57.4714 95.3142 57.5291C95.1759 57.5868 95.0273 57.6161 94.8775 57.6152H76.8145C76.815 52.6537 74.8948 47.8847 71.4564 44.3079C68.018 40.7311 63.3284 38.6243 58.3708 38.4292C58.2717 38.43 58.1733 38.4113 58.0814 38.3742C57.9895 38.337 57.9058 38.2821 57.8351 38.2126C57.7644 38.143 57.7081 38.0603 57.6694 37.969C57.6307 37.8777 57.6103 37.7797 57.6095 37.6805V19.1861C67.6005 19.1868 77.1981 23.0803 84.3656 30.0406ZM112.3 25.7718H122.121C122.263 25.7722 122.401 25.818 122.515 25.9025C122.63 25.9869 122.714 26.1056 122.756 26.2413L132.907 60.1974L144.391 26.2222C144.431 26.0874 144.516 25.9699 144.631 25.8883C144.746 25.8068 144.884 25.7658 145.025 25.7718H150.596C150.736 25.7654 150.874 25.8055 150.988 25.8858C151.103 25.9661 151.188 26.0822 151.23 26.2159L162.929 60.1974L172.973 26.2413C173.01 26.1029 173.093 25.9811 173.208 25.8959C173.323 25.8106 173.464 25.7669 173.607 25.7718H183.422C183.529 25.7645 183.636 25.7843 183.733 25.8292C183.829 25.8742 183.913 25.9429 183.977 26.0289C184.04 26.115 184.08 26.2156 184.094 26.3215C184.109 26.4274 184.096 26.5351 184.057 26.6346L167.561 76.5029C167.521 76.639 167.437 76.7579 167.322 76.8407C167.207 76.9235 167.068 76.9654 166.927 76.9597H159.25C159.108 76.9654 158.969 76.9235 158.854 76.8407C158.739 76.7579 158.655 76.639 158.615 76.5029L147.899 43.4351L137.177 76.5029C137.133 76.6362 137.048 76.7522 136.934 76.8342C136.82 76.9162 136.683 76.9602 136.542 76.9597H128.84C128.699 76.9658 128.561 76.9248 128.446 76.8432C128.331 76.7616 128.246 76.6441 128.206 76.5093L111.665 26.6473C111.627 26.5478 111.614 26.4401 111.628 26.3342C111.642 26.2283 111.682 26.1277 111.746 26.0416C111.809 25.9556 111.893 25.8869 111.99 25.8419C112.087 25.797 112.193 25.7772 112.3 25.7845V25.7718ZM193.421 61.5424H221.16V61.5678C221.323 61.5679 221.482 61.5089 221.605 61.4016C221.729 61.2944 221.809 61.1461 221.832 60.9841C222.004 59.7543 222.093 58.5143 222.099 57.2725C222.099 45.275 213.921 38.296 203.186 38.296C191.41 38.296 183.518 46.8167 183.518 58.1037C183.518 68.2169 189.887 77.848 204.017 77.848C209.708 77.8521 215.272 76.1674 220.005 73.0071C220.143 72.9085 220.239 72.7626 220.275 72.5975C220.311 72.4323 220.285 72.2596 220.202 72.1125L216.985 66.4024C216.938 66.3216 216.876 66.2512 216.801 66.1955C216.726 66.1398 216.64 66.1001 216.549 66.0787C216.458 66.0573 216.364 66.0547 216.272 66.0711C216.18 66.0875 216.092 66.1225 216.014 66.174C212.521 68.3057 208.527 69.4787 204.436 69.5747C197.996 69.5747 194.601 66.1169 193.421 61.5424ZM212.607 54.2398H193.421C194.601 49.3228 198.205 46.3409 203.186 46.3409C208.166 46.3409 211.706 49.3926 212.607 54.2398ZM230.715 76.2682V25.0104C230.715 24.827 230.788 24.6511 230.917 24.5214C231.047 24.3917 231.223 24.3189 231.406 24.3189H239.826C239.999 24.3332 240.161 24.4124 240.278 24.5405C240.396 24.6687 240.461 24.8365 240.46 25.0104V76.2682C240.461 76.4421 240.396 76.6099 240.278 76.738C240.161 76.8662 239.999 76.9454 239.826 76.9597H231.406C231.223 76.9597 231.047 76.8869 230.917 76.7572C230.788 76.6275 230.715 76.4516 230.715 76.2682ZM249.666 25.0104V76.2682C249.666 76.4516 249.739 76.6275 249.868 76.7572C249.998 76.8869 250.174 76.9598 250.357 76.9598H258.739C258.83 76.9606 258.921 76.9433 259.005 76.9089C259.09 76.8746 259.167 76.8238 259.232 76.7595C259.297 76.6952 259.348 76.6186 259.383 76.5343C259.418 76.45 259.436 76.3595 259.436 76.2682V25.0104C259.436 24.9191 259.418 24.8286 259.383 24.7443C259.348 24.66 259.297 24.5835 259.232 24.5192C259.167 24.4549 259.09 24.4041 259.005 24.3697C258.921 24.3353 258.83 24.318 258.739 24.3189H250.357C250.174 24.3189 249.998 24.3917 249.868 24.5214C249.739 24.6511 249.666 24.827 249.666 25.0104ZM266.784 70.1964L271.053 65.1208C271.118 65.0431 271.198 64.9801 271.289 64.9358C271.379 64.8916 271.478 64.8671 271.579 64.8642C271.68 64.8612 271.78 64.8796 271.874 64.9184C271.967 64.9572 272.05 65.0154 272.119 65.089C274.79 67.9821 278.464 69.7459 282.049 69.7459C285.024 69.7459 287.245 68.2232 287.245 66.0788C287.245 64.6957 286.344 63.6552 284.542 62.824C283.65 62.4079 282.225 61.8822 280.708 61.3223L280.707 61.3222L280.707 61.322L280.706 61.3218C278.684 60.5758 276.498 59.7693 275.19 59.0807C270.901 57.0061 268.681 53.6815 268.681 49.3164C268.681 42.7371 274.219 37.9597 282.81 37.9597C285.161 37.9048 287.499 38.3136 289.691 39.1628C291.884 40.0119 293.888 41.2847 295.588 42.9084C295.714 43.0327 295.79 43.1988 295.802 43.3754C295.813 43.5519 295.76 43.7266 295.651 43.8665L291.667 49.0436C291.606 49.1219 291.53 49.1869 291.443 49.2344C291.356 49.282 291.26 49.3111 291.161 49.32C291.062 49.329 290.963 49.3175 290.869 49.2863C290.774 49.2551 290.688 49.2049 290.614 49.1388C288.384 47.149 285.524 46.0099 282.537 45.9221C279.834 45.9221 278.236 47.375 278.236 49.0944C278.236 50.414 279.073 51.7274 281.566 52.5585C282.099 52.7622 282.702 52.9834 283.351 53.2215L283.354 53.2228L283.355 53.2232C285.575 54.0377 288.333 55.0495 290.639 56.232C294.865 58.4463 296.984 61.3521 296.984 65.7869C296.984 72.6454 291.166 77.9051 281.953 77.9051C276.123 77.9051 270.533 75.64 266.727 71.1037C266.616 70.9748 266.555 70.8105 266.555 70.6405C266.555 70.4706 266.616 70.3063 266.727 70.1774L266.784 70.1964ZM327.603 74.6862C327.646 74.5542 327.641 74.4114 327.59 74.2823L325.103 67.6903C325.072 67.6107 325.025 67.5385 324.965 67.4785C324.904 67.4186 324.832 67.3724 324.752 67.3429C324.672 67.3135 324.586 67.3015 324.501 67.3078C324.416 67.3141 324.334 67.3385 324.259 67.3794C322.52 68.3839 320.557 68.9379 318.549 68.991C314.882 68.991 313.213 66.7069 313.213 62.3419V47.3814H325.115C325.277 47.3817 325.433 47.3201 325.551 47.2092C325.669 47.0983 325.74 46.9466 325.75 46.785V39.806C325.74 39.6444 325.669 39.4926 325.551 39.3817C325.433 39.2709 325.277 39.2093 325.115 39.2096H313.245V26.438C313.245 26.2798 313.182 26.1281 313.07 26.0162C312.958 25.9044 312.807 25.8416 312.648 25.8416H304.083C303.921 25.8413 303.765 25.9029 303.647 26.0137C303.53 26.1246 303.458 26.2764 303.449 26.438V62.97C303.449 72.7343 307.953 77.8607 316.607 77.8607C320.38 77.8791 324.089 76.8937 327.355 75.0056C327.472 74.9312 327.56 74.8183 327.603 74.6862ZM371.018 39.9709V76.1349C371.018 76.3408 370.937 76.5384 370.792 76.6845C370.647 76.8307 370.45 76.9137 370.244 76.9153H362.517C362.31 76.9153 362.111 76.8331 361.965 76.6868C361.819 76.5404 361.736 76.3419 361.736 76.1349V72.5503C360.215 74.2322 358.353 75.5715 356.275 76.4793C354.197 77.3872 351.949 77.8429 349.682 77.8163C338.737 77.8163 330.978 69.0861 330.978 57.8689C330.978 46.5058 338.947 38.2008 349.682 38.2008C351.967 38.1845 354.229 38.6652 356.311 39.6095C358.392 40.5538 360.243 41.9392 361.736 43.6698V39.9709C361.738 39.765 361.821 39.5682 361.967 39.4232C362.113 39.2782 362.311 39.1969 362.517 39.1969H370.244C370.45 39.1969 370.647 39.2784 370.792 39.4236C370.937 39.5687 371.018 39.7656 371.018 39.9709ZM361.876 58.0466C361.876 52.1588 357.517 47.172 351.281 47.172C345.044 47.172 340.755 52.1588 340.755 58.0466C340.755 64.0739 345.044 68.991 351.281 68.991C357.517 68.991 361.876 64.0041 361.876 58.0466ZM388.77 39.2096H380.998V39.1842C380.788 39.1842 380.586 39.2678 380.438 39.4165C380.289 39.5652 380.205 39.767 380.205 39.9773V76.1413C380.205 76.3517 380.289 76.5534 380.438 76.7021C380.586 76.8508 380.788 76.9344 380.998 76.9344H389.183C389.393 76.9344 389.595 76.8508 389.744 76.7021C389.892 76.5534 389.976 76.3517 389.976 76.1413V59.011C389.976 50.7631 394.062 47.5908 399.188 47.5908C400.406 47.6023 401.617 47.7707 402.792 48.092C402.903 48.12 403.019 48.1235 403.132 48.1024C403.244 48.0813 403.351 48.036 403.444 47.9697C403.538 47.9033 403.616 47.8175 403.673 47.7182C403.73 47.6188 403.765 47.5082 403.775 47.3941L404.461 39.6283C404.481 39.4504 404.439 39.271 404.342 39.1206C404.244 38.9702 404.098 38.8582 403.928 38.8035C402.64 38.397 401.3 38.1832 399.95 38.1691C395.515 38.1691 391.917 40.1105 389.557 44.2662V40.0027C389.557 39.7934 389.475 39.5927 389.327 39.4441C389.18 39.2956 388.98 39.2113 388.77 39.2096Z" fill="#8347AD"
                            />
                        </svg>
                    </a>
                </Link>
                <button className='inline-flex p-3 hover:bg-purple-base rounded lg:hidden text-purple-base ml-auto hover:text-white-base outline-none' onClick={handlePressed}>
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                </button>
                <div className={`${active ? '' : 'hidden'} w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
                    <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>

                        <NavItem text='Find Care' items={[
                            'Emergency',
                            'Providers',
                            'Locations',
                            'Services'
                        ]} />

                        <NavItem text='Patient Info' items={[
                            'MyChart',
                            'Pricing',
                            'Bill Pay',
                            'Visitations'
                        ]} />

                        <NavItem text='Community' items={[
                            'Events',
                            'Lastest News',
                            'Donate',
                            'Volunteer'
                        ]} />


                        <NavItem text='About Us' items={[
                            'Leadership',
                            'Our Mission',
                            'Our Awards',
                            'Our Contact',
                            'Safety & Regulation'
                        ]} />

                        <Link href='/'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-purple-base bg-white-base font-bold item-center justify-center hover:bg-purple-base hover:text-white-base'>
                                <SearchIcon className='mr-2' />
                                Search
                            </a>
                        </Link>

                        {/*
                            <div className='bg-white-base flex items-center rounded-full shadow-md'>
                                <input className='rounded-l-full w-300 h-3 py-4 px-6 text-gray-700 leading-tight outline-none' id='search' type='text' placeholder='Search' />
                                <div className=''>
                                    <SearchIcon className='mr-2 text-purple-base' />
                                </div>
                            </div>
                        */}

                        <NavItemText text='Hi, you are a Patient' handleExperience = { props.handleExperience } options={['Providers', 'Careers']}/>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default PatientsNavbar