import React from 'react';

// ICONS GENERAL
export const IconAddressBook = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 17.5">
        <path d="M0,0h16c1.1,0,2,0.8,2,1.7v14c0,1-0.9,1.7-2,1.7H0V0z M4,1.8H2v14h2V1.8z M6,15.8h10v-14H6V15.8z M8,12.3
			c0-1.4,1.3-2.6,3-2.6s3,1.2,3,2.6H8z M11,8.8C9.9,8.8,9,8,9,7s0.9-1.8,2-1.8S13,6,13,7S12.1,8.8,11,8.8z M19,3.5h2V7h-2V3.5z
			M19,8.8h2v3.5h-2V8.8z"/>
    </svg>;
};

export const IconDelete = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.4 18.4">
        <path d="M18.4,1.4l-7.8,7.8l7.8,7.8L17,18.4l-7.8-7.8l-7.8,7.8L0,17l7.8-7.8L0,1.4L1.4,0l7.8,7.8L17,0L18.4,1.4z" />
    </svg>;
};

export const IconLogout = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 12.7">
        <path id="Shape" d="M0.5,12.7c-0.3,0-0.5-0.3-0.5-0.6V0.6C0,0.3,0.2,0,0.5,0h7.4c0.3,0,0.5,0.3,0.5,0.6v1.9H7.4V1.3H1.1v10.2h6.3
			v-1.3h1.1v1.9c0,0.4-0.2,0.6-0.5,0.6H0.5z M7.4,8.9V7H3.7V5.7h3.7V3.8L10,6.3L7.4,8.9z"/>
    </svg>;
};

export const IconMenuDashboard = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 17">
        <path d="M0,0h8.9v7.6H0V0z M0,9.4h8.9V17H0V9.4z M11.1,0H20v7.6h-8.9V0z M11.1,9.4H20V17h-8.9V9.4z M13.3,1.9v3.8
			h4.4V1.9H13.3z M13.3,11.3v3.8h4.4v-3.8H13.3z M2.2,1.9v3.8h4.4V1.9H2.2z M2.2,11.3v3.8h4.4v-3.8H2.2z"/>
    </svg>;
};

export const IconBurger = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.3 18.7">
        <path d="M0,0h24.3v2.3H0V0z M0,8.2h16.2v2.3H0V8.2z M0,16.3h24.3v2.3H0V16.3z" />
    </svg>;
};

export const IconPen = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <path d="M5.5,14.2H16V16H0v-3.9L8.8,3l3.8,3.9L5.5,14.2L5.5,14.2z M10,2.2l1.9-1.9c0.4-0.4,0.9-0.4,1.3,0
			l2.5,2.5c0.4,0.4,0.4,0.9,0,1.3L13.8,6L10,2.2L10,2.2z"/>
    </svg>;
};

export const IconProfile = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.3 13.3">
        <path d="M6.7,0c3.7,0,6.7,3,6.7,6.7s-3,6.7-6.7,6.7S0,10.3,0,6.7S3,0,6.7,0z M2.7,8.9c1,1.5,2.4,2.4,4.1,2.4
				c1.6,0,3.1-0.9,4.1-2.4c-1.1-1-2.6-1.6-4.1-1.6C5.3,7.3,3.8,7.9,2.7,8.9L2.7,8.9z M6.7,6c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2
				S5.6,6,6.7,6z"/>
    </svg>;
};

export const IconSearch = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.3 20.3">
        <path d="M9,0c5,0,9,4,9,9s-4,9-9,9s-9-4-9-9S4,0,9,0z M9,16c3.9,0,7-3.1,7-7c0-3.9-3.1-7-7-7C5.1,2,2,5.1,2,9
				C2,12.9,5.1,16,9,16z M17.5,16.1l2.8,2.8l-1.4,1.4l-2.8-2.8L17.5,16.1L17.5,16.1z"/>
    </svg>;
};

export const IconShape = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.2 13.5">
        <path d="M0,6.8C0.7,2.9,4.1,0,8.1,0s7.4,2.9,8.1,6.8c-0.7,3.8-4.1,6.8-8.1,6.8S0.7,10.6,0,6.8z M8.1,10.5
				c2.1,0,3.8-1.7,3.8-3.8S10.2,3,8.1,3S4.4,4.7,4.4,6.8S6,10.5,8.1,10.5L8.1,10.5z M8.1,9C6.9,9,5.9,8,5.9,6.8s1-2.3,2.3-2.3
				s2.3,1,2.3,2.3S9.4,9,8.1,9z"/>
    </svg>;
};

export const IconStar = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.8 21.7">
        <path d="M11.4,17.8l-7.1,3.9l1.6-7.9L0,8.3l8-1L11.4,0l3.4,7.3l8,1l-5.9,5.5l1.6,7.9L11.4,17.8z
				M11.4,15.5l4.2,2.4l-0.9-4.8l3.6-3.3l-4.8-0.6l-2-4.4l-2,4.4L4.6,9.8l3.6,3.3l-1,4.7L11.4,15.5z"/>
    </svg>;
};

export const IconStarFilled = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.8 21.7">
        <path d="M11.4,17.8l-7.1,3.9l1.6-7.9L0,8.3l8-1L11.4,0l3.4,7.3l8,1l-5.9,5.5l1.6,7.9L11.4,17.8z" />
    </svg>;
};

export const IconWarning = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.3 13.5">
        <path d="M8.3,0.4l6.9,12c0.1,0.2,0.1,0.5,0,0.7c-0.1,0.2-0.4,0.4-0.6,0.4H0.7c-0.3,0-0.5-0.1-0.6-0.4s-0.1-0.5,0-0.7
				L7,0.4C7.2,0.1,7.4,0,7.7,0S8.2,0.1,8.3,0.4z M6.9,9.8v1.5h1.5V9.8H6.9z M6.9,4.7v3.6h1.5V4.7H6.9z"/>
    </svg>;
};

export const IconMission = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
            <polygon id="path-1" points="0 0 20 0 20 20 0 20" />
        </defs>
        <g id="Website" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Batilex---Wide-Screen-Menu" transform="translate(-23.000000, -448.000000)">
                <g id="LeftMenu-Open-Copy" transform="translate(-1.000000, 0.000000)">
                    <g id="Group" transform="translate(0.000000, 77.000000)">
                        <g id="Mission" transform="translate(0.000000, 346.000000)">
                            <g id="Icons/icon-mission" transform="translate(24.000000, 25.000000)">
                                <mask id="mask-2" fill="white">
                                    <use xlinkHref="#path-1" />
                                </mask>
                                <g id="Clip-2" />
                                <path fill="currentColor" d="M17.7148959,0 L15.0240256,2.688 L15.1308062,3.54133333 L9.83470368,8.85333333 C9.66364122,8.81066667 9.49279231,8.78933333 9.32194341,8.78933333 C8.27549386,8.78933333 7.42124933,9.64266667 7.42124933,10.688 C7.42124933,11.7333333 8.27549386,12.5866667 9.32194341,12.5866667 C10.3686065,12.5866667 11.222851,11.7333333 11.222851,10.688 C11.222851,10.5173333 11.2012814,10.3466667 11.1587827,10.176 L16.4550988,4.88533333 L17.3093433,4.992 L20,2.304 L17.9711692,2.02666667 L17.7148959,0 Z M15.8996263,7.57333333 C17.1809931,10.2826667 16.7113721,13.6106667 14.4689802,15.8506667 C11.6284036,18.688 7.01548318,18.688 4.15376401,15.8506667 C1.31340096,12.992 1.31340096,8.384 4.15376401,5.54666667 C6.3961559,3.30666667 9.72792312,2.83733333 12.4401495,4.11733333 L13.9350774,2.624 C10.3686065,0.576 5.7554725,1.088 2.72290443,4.11733333 C-0.90763481,7.744 -0.90763481,13.6533333 2.72290443,17.28 C6.35344367,20.9066667 12.269087,20.9066667 15.8996263,17.28 C18.9321943,14.2506667 19.4449546,9.62133333 17.3945542,6.08 L15.8996263,7.57333333 Z M6.7164976,8.10666667 C5.28563801,9.536 5.28563801,11.8613333 6.7164976,13.2906667 C8.14735718,14.72 10.4753871,14.72 11.9062467,13.2906667 C12.6748532,12.5226667 13.0381207,11.4986667 12.9740523,10.496 L14.5541911,8.91733333 C15.2164442,10.8373333 14.7677523,13.056 13.2301121,14.592 C11.0731447,16.7466667 7.57074212,16.7466667 5.41377469,14.592 C3.25680726,12.4373333 3.25680726,8.93866667 5.41377469,6.784 C6.9516284,5.248 9.17245061,4.8 11.0945008,5.46133333 L9.53550454,7.01866667 C8.51041111,6.976 7.48553123,7.33866667 6.7164976,8.10666667 L6.7164976,8.10666667 Z" id="Fill-1"  mask="url(#mask-2)" />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>;
}

export const AddUser = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} viewBox="0 0 20 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
            <polygon id="path-1" points="4.11764706e-05 0.0224823529 11.8541294 0.0224823529 11.8541294 5.55882353 4.11764706e-05 5.55882353"/>
            <polygon id="path-3" points="0.161102941 0.179282353 8.44138235 0.179282353 8.44138235 8.45987059 0.161102941 8.45987059"/>
        </defs>
        <g id="Website" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Batilex---Assign-a-mediator" transform="translate(-1039.000000, -615.000000)">
                <g id="Icons" transform="translate(1007.000000, 613.000000)">
                    <g id="Icons/icon-add-user" transform="translate(32.000000, 2.000000)">
                        <path d="M5.92716765,6.05275588 C7.59605,6.05275588 8.95343235,4.69516765 8.95343235,3.02649118 C8.95343235,1.35760882 7.59584412,2.05882353e-05 5.92716765,2.05882353e-05 C4.25828529,2.05882353e-05 2.90069706,1.35781471 2.90069706,3.02649118 C2.90069706,4.69537353 4.25828529,6.05275588 5.92716765,6.05275588" id="head" fill="#33BAB3" fillRule="nonzero"/>
                        <g id="body" transform="translate(0.000000, 7.603647)">
                            <mask id="mask-2" fill="white">
                                <use xlinkHref="#path-1"/>
                            </mask>
                            <g id="Clip-4"/>
                            <path d="M7.72762941,0.0224823529 L4.12654118,0.0224823529 C1.85112941,0.0224823529 4.11764706e-05,1.87377647 4.11764706e-05,4.14898235 L4.11764706e-05,5.55886471 L11.8541294,5.55886471 L11.8541294,4.14898235 C11.8541294,1.87377647 10.0028353,0.0224823529 7.72762941,0.0224823529" id="Fill-3" fill="#33BAB3" fillRule="nonzero" mask="url(#mask-2)"/>
                        </g>
                        <g id="plus" transform="translate(10.088235, 1.221294)">
                            <mask id="mask-4" fill="white">
                                <use xlinkHref="#path-3"/>
                            </mask>
                            <g id="Clip-7"/>
                            <path d="M7.54507353,3.42316471 L5.19739706,3.42316471 L5.19739706,1.07548824 C5.19739706,0.580547059 4.79592647,0.179282353 4.30098529,0.179282353 C3.80625,0.179282353 3.40498529,0.580547059 3.40498529,1.07548824 L3.40498529,3.42337059 L1.05710294,3.42337059 C0.562367647,3.42337059 0.161102941,3.82463529 0.161102941,4.31957647 C0.161102941,4.81451765 0.562367647,5.21578235 1.05710294,5.21578235 L3.40519118,5.21578235 L3.40519118,7.56366471 C3.40519118,8.05881176 3.80645588,8.45987059 4.30119118,8.45987059 C4.79613235,8.45987059 5.19760294,8.05881176 5.19760294,7.56366471 L5.19760294,5.21557647 L7.54527941,5.21557647 C8.04001471,5.21557647 8.44148529,4.81431176 8.44148529,4.31937059 C8.44148529,3.82442941 8.03980882,3.42316471 7.54507353,3.42316471" id="Fill-6" fill="#33BAB3" fillRule="nonzero" mask="url(#mask-4)"/>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
}
// ARROWS

export const IconArrow = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <path d="M4.3,10.2l6,6.2L8.8,18L0,9l8.8-9l1.6,1.6l-6,6.2H18v2.3H4.3z" />
    </svg>;
};

export const IconArrowDropdown = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 10.4">
        <path d="M8.5,6.6L15.1,0L17,1.9l-8.5,8.5L0,1.9L1.9,0L8.5,6.6z" />
    </svg>;
};

export const IconArrowPager = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 9">
        <path d="M0,0v9l7-4.5L0,0z" />
    </svg>;
};

export const IconCalendar = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.9 86.8">
        <path d="M82.7,7.1h-9.1V3.9c0-2.2-1.7-3.9-3.9-3.9c-2.2,0-3.9,1.7-3.9,3.9v3.2H29.2V3.9c0-2.2-1.7-3.9-3.9-3.9s-3.9,1.7-3.9,3.9v3.2
				h-9.1C5.5,7.1,0,12.6,0,19.4v55.1c0,6.8,5.5,12.3,12.3,12.3h70.3c6.8,0,12.3-5.5,12.3-12.3V19.4C95,12.6,89.5,7.1,82.7,7.1z
				M12.3,14.9h70.3c2.5,0,4.5,2,4.5,4.5v3.3H7.8v-3.3C7.8,16.9,9.8,14.9,12.3,14.9z M82.7,79H12.3c-2.5,0-4.5-2-4.5-4.5v-44h79.4v44
				C87.2,77,85.2,79,82.7,79z M28.3,39.1h-9c-1.4,0-2.5,1.1-2.5,2.5v6c0,1.4,1.1,2.5,2.5,2.5h9c1.4,0,2.5-1.1,2.5-2.5v-6
				C30.8,40.2,29.7,39.1,28.3,39.1z M52,39.1h-9c-1.4,0-2.5,1.1-2.5,2.5v6c0,1.4,1.1,2.5,2.5,2.5h9c1.4,0,2.5-1.1,2.5-2.5v-6
				C54.5,40.2,53.4,39.1,52,39.1z M75.7,39.1h-9c-1.4,0-2.5,1.1-2.5,2.5v6c0,1.4,1.1,2.5,2.5,2.5h9c1.4,0,2.5-1.1,2.5-2.5v-6
				C78.2,40.2,77.1,39.1,75.7,39.1z M28.3,59.8h-9c-1.4,0-2.5,1.1-2.5,2.5v6c0,1.4,1.1,2.5,2.5,2.5h9c1.4,0,2.5-1.1,2.5-2.5v-6
				C30.8,60.9,29.7,59.8,28.3,59.8z M52,59.8h-9c-1.4,0-2.5,1.1-2.5,2.5v6c0,1.4,1.1,2.5,2.5,2.5h9c1.4,0,2.5-1.1,2.5-2.5v-6
				C54.5,60.9,53.4,59.8,52,59.8z M75.7,59.8h-9c-1.4,0-2.5,1.1-2.5,2.5v6c0,1.4,1.1,2.5,2.5,2.5h9c1.4,0,2.5-1.1,2.5-2.5v-6
				C78.2,60.9,77.1,59.8,75.7,59.8z"/>
    </svg>;
};

export const IconFolderOpen = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
        <title>Icons/icon-folder-open</title>
        <g id="Website" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Batilex---R3-Repository" transform="translate(-240.000000, -702.000000)">
                <g id="Folder-03" transform="translate(208.000000, 702.000000)">
                    <g id="Icons/icon-folder-open" transform="translate(32.000000, 0.000000)">
                        <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                        <path d="M13.414,5 L20,5 C20.5522847,5 21,5.44771525 21,6 L21,7 L3,7 L3,4 C3,3.44771525 3.44771525,3 4,3 L11.414,3 L13.414,5 Z M3.087,8.9999999 L20.913,8.9999999 C21.1927224,8.999874 21.459711,9.11691212 21.6491648,9.32270793 C21.8386186,9.52850375 21.933217,9.80424273 21.91,10.083 L21.076,20.083 C21.0328488,20.6011013 20.5998951,20.9997143 20.08,20.9999999 L3.92,20.9999999 C3.40010491,20.9997143 2.96715122,20.6011013 2.924,20.083 L2.09,10.083 C2.06678301,9.80424273 2.16138143,9.52850375 2.3508352,9.32270793 C2.54028896,9.11691212 2.80727759,8.999874 3.087,8.9999999 Z" id="Shape" fill="#33BAB3"></path>
                    </g>
                </g>
            </g>
        </g>
    </svg>
};

export const IconFolderClosed = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
        <title>Icons/icon-folder-closed</title>
        <g id="Website" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Batilex---R3-Repository" transform="translate(-240.000000, -622.000000)">
                <g id="Folder-02" transform="translate(208.000000, 622.000000)">
                    <g id="Icons/icon-folder-closed" transform="translate(32.000000, 0.000000)">
                        <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                        <path d="M22,8 L22,20 C22,20.5522847 21.5522847,21 21,21 L3,21 C2.44771525,21 2,20.5522847 2,20 L2,7 L21,7 C21.5522847,7 22,7.44771525 22,8 Z M12.414,5 L2,5 L2,4 C2,3.44771525 2.44771525,3 3,3 L10.414,3 L12.414,5 Z" id="Shape" fill="#33BAB3"></path>
                    </g>
                </g>
            </g>
        </g>
    </svg>
};

export const IconFile = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
        <title>Icons/icon-files</title>
        <g id="Website" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Batilex---R3-Repository" transform="translate(-286.000000, -784.000000)">
                <g id="Icons/icon-files" transform="translate(286.000000, 784.000000)">
                    <polygon id="Path" points="0 0 24 0 24 24 0 24"/>
                    <path fill="currentColor" d="M2.9999753,9 L9,9 C9.55228475,9 10,8.55228475 10,8 L10,2 L20.002,2 C20.553,2 21,2.455 21,2.992 L21,21.008 C20.9994481,21.5560282 20.5550285,22 20.007,22 L3.993,22 C3.72778147,21.99815 3.47416127,21.8910147 3.28793625,21.7021642 C3.10171122,21.5133136 2.99813697,21.2582184 2.9999753,20.993 L2.9999753,9 Z M3,7 L8,2.003 L8,7 L3,7 Z" id="Shape"/>
                </g>
            </g>
        </g>
    </svg>
};

export const IconVariable = ({className}) => {
    return <svg className={`svg-inline ${className ? className : ''}`}  width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
    <title>Icons/icon-copy</title>
    <g id="Website" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Batilex---R4-Template-Email-List" transform="translate(-1186.000000, -784.000000)">
            <g id="Global" transform="translate(1032.000000, 752.000000)">
                <g id="Icons/icon-copy" transform="translate(154.000000, 32.000000)">
                    <polygon id="Path" points="0 0 16 0 16 16 0 16"></polygon>
                    <path d="M4.66666667,4 L4.66666667,2 C4.66666667,1.63181017 4.9651435,1.33333333 5.33333333,1.33333333 L13.3333333,1.33333333 C13.7015232,1.33333333 14,1.63181017 14,2 L14,11.3333333 C14,11.7015232 13.7015232,12 13.3333333,12 L11.3333333,12 L11.3333333,14 C11.3333333,14.368 11.0333333,14.6666787 10.662,14.6666787 L2.67133333,14.6666787 C2.49376897,14.6677311 2.32310213,14.5979847 2.19710575,14.4728642 C2.07110938,14.3477436 2.0001742,14.1775675 2,14 L2.002,4.66666667 C2.002,4.29866667 2.302,4 2.67266667,4 L4.66666667,4 Z M3.33466667,5.33333333 L3.33333333,13.3333333 L10,13.3333333 L10,5.33333333 L3.33466667,5.33333333 Z M6,4 L11.3333333,4 L11.3333333,10.6666667 L12.6666667,10.6666667 L12.6666667,2.66666667 L6,2.66666667 L6,4 Z M4.66666667,7.33333333 L8.66666667,7.33333333 L8.66666667,8.66666667 L4.66666667,8.66666667 L4.66666667,7.33333333 Z M4.66666667,10 L8.66666667,10 L8.66666667,11.3333333 L4.66666667,11.3333333 L4.66666667,10 Z" id="Shape" fill={className==="hover"?"#33BAB3":"#4D535B"} fillRule="nonzero"></path>
                </g>
            </g>
        </g>
    </g>
</svg>
}

export const IconClock = ({className}) => {
    return <svg className={`svg-inline ${className ? className : ''}`}  viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <g id="Website" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Batilex---R3-Repository" transform="translate(-464.000000, -876.000000)">
                    <g id="Folder-03" transform="translate(208.000000, 690.000000)">
                        <g id="File-01" transform="translate(79.000000, 110.000000)">
                            <g id="Icons/icon-backtime" transform="translate(177.000000, 76.000000)">
                                <polygon id="Path" points="0 0 18 0 18 18 0 18"></polygon>
                                <path d="M9,1.5 C13.14225,1.5 16.5,4.85775 16.5,9 C16.5,13.14225 13.14225,16.5 9,16.5 C4.85775,16.5 1.5,13.14225 1.5,9 L3,9 C3,12.3135 5.6865,15 9,15 C12.3135,15 15,12.3135 15,9 C15,5.6865 12.3135,3 9,3 C6.9375,3 5.118,4.04025 4.03875,5.625 L6,5.625 L6,7.125 L1.5,7.125 L1.5,2.625 L3,2.625 L3,4.5 C4.368,2.6775 6.54675,1.5 9,1.5 Z M9.75,5.25 L9.75,8.68875 L12.18225,11.121 L11.121,12.18225 L8.25,9.30975 L8.25,5.25 L9.75,5.25 Z" id="Shape" fill="currentColor" fillRule="nonzero"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
}

export const IconRefreshDouble = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M3.5,2.4C5.3,0.9,7.6,0,10,0c5.5,0,10,4.5,10,10c0,2.1-0.7,4.1-1.8,5.7L15,10h3
            c0-3.2-1.9-6.1-4.9-7.4S6.8,2,4.5,4.2L3.5,2.4z M16.5,17.6C14.7,19.1,12.4,20,10,20C4.5,20,0,15.5,0,10c0-2.1,0.7-4.1,1.8-5.7L5,10
            H2c0,3.2,1.9,6.1,4.9,7.4c2.9,1.3,6.4,0.6,8.7-1.6L16.5,17.6L16.5,17.6z"/>
    </svg>;
};

export const IconInfo = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" />
    </svg>
};

export const IconMailTemplate = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="currentColor" d="M2,5.5V4c0-0.5,0.4-1,1-1h18c0.5,0,1,0.4,1,1v16c0,0.5-0.4,1-1,1H3c-0.5,0-1-0.4-1-1v-1h18V7.3
	l-8,7.2L2,5.5z M0,10h5v2H0V10z M0,15h8v2H0V15z"/>
    </svg>
};

export const IconMail = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 12">
        <path fill="currentColor" d="M1,0h12c0.4,0,0.7,0.3,0.7,0.7v10.7c0,0.4-0.3,0.7-0.7,0.7H1c-0.4,0-0.7-0.3-0.7-0.7V0.7
	C0.3,0.3,0.6,0,1,0z M7,5.8L2.8,2.2l-0.9,1L7,7.5l5.1-4.4l-0.9-1L7,5.8L7,5.8z" />
    </svg>
};

export const IconRequest = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
        <path fill="currentColor" d="M7,13.7c-3.7,0-6.7-3-6.7-6.7s3-6.7,6.7-6.7s6.7,3,6.7,6.7S10.7,13.7,7,13.7z
	 M6.3,9v1.3h1.3V9H6.3z M7.7,7.9c1.1-0.3,1.8-1.4,1.6-2.6s-1.1-2-2.3-2c-1.1,0-2.1,0.8-2.3,1.9L6,5.5C6.1,5,6.6,4.6,7.1,4.7
	S8,5.2,8,5.7c0,0.5-0.5,0.9-1,0.9C6.6,6.7,6.3,7,6.3,7.3v1h1.3V7.9z"/>
    </svg>
};

export const IconClockFilled = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
        <path fill="currentColor" d="M7,13.7c-3.7,0-6.7-3-6.7-6.7s3-6.7,6.7-6.7s6.7,3,6.7,6.7S10.7,13.7,7,13.7z
	 M7.7,7V3.7H6.3v4.7h4V7H7.7z"/>
    </svg>
};

export const IconGenerateFile = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 14">
        <path fill="currentColor" d="M8.7,0.3L12,3.7V13c0,0.4-0.3,0.7-0.7,0.7H0.7C0.3,13.7,0,13.4,0,13V1c0-0.4,0.3-0.7,0.7-0.7H8.7z M6.7,7V4.3
	H5.3V7h-2L6,9.7L8.7,7H6.7z"/>
    </svg>
};

export const IconAdd = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
        <polygon fill="currentColor" points="5.1,5.1 5.1,0 6.9,0 6.9,5.1 12,5.1 12,6.9 6.9,6.9 6.9,12 5.1,12 5.1,6.9 0,6.9 0,5.1 "/>
    </svg>
};

export const IconCalendar2 = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="currentColor" d="M17,3h4c0.6,0,1,0.4,1,1v16c0,0.6-0.4,1-1,1H3c-0.6,0-1-0.4-1-1V4c0-0.6,0.4-1,1-1h4V1h2v2h6V1h2V3z
	 M20,11H4v8h16V11z M15,5H9v2H7V5H4v4h16V5h-3v2h-2V5z M6,13h2v2H6V13z M11,13h2v2h-2V13z M16,13h2v2h-2V13z"/>
    </svg>
};

export const IconWallet = ({className}) => {
    return <svg className={`svg-inline ${className ? className : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g fill="none" fillRule="evenodd" className="website">
            <g className="website__batilex---wide-screen-menu" transform="translate(-21 -656)">
                <g className="website__batilex---wide-screen-menu__leftmenu-open-copy" transform="translate(-1)">
                    <g className="website__batilex---wide-screen-menu__leftmenu-open-copy__group"
                       transform="translate(0 77)">
                        <g className="website__batilex---wide-screen-menu__leftmenu-open-copy__group__expenses"
                           transform="translate(0 555)">
                            <g className="website__batilex---wide-screen-menu__leftmenu-open-copy__group__expenses__icon-wallet"
                               transform="translate(22 24)">
                                <polygon points="0 0 24 0 24 24 0 24"
                                         className="website__batilex---wide-screen-menu__leftmenu-open-copy__group__expenses__icon-wallet__path"/>
                                <path fill="#FFF" fillRule="nonzero"
                                      d="M22 7h1v10h-1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3zm-2 10h-6a5 5 0 0 1 0-10h6V5H4v14h16v-2zm1-2V9h-7a3 3 0 0 0 0 6h7zm-7-4h3v2h-3v-2z"
                                      className="website__batilex---wide-screen-menu__leftmenu-open-copy__group__expenses__icon-wallet__shape"/>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
}

export const IconExchange = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink">
        <g id="Website" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Batilex---Wide-Screen-Menu" transform="translate(-21.000000, -866.000000)">
                <g id="LeftMenu-Open-Copy" transform="translate(-1.000000, 0.000000)">
                    <g id="Group" transform="translate(0.000000, 77.000000)">
                        <g id="Services" transform="translate(0.000000, 765.000000)">
                            <g id="Icons/icon-exchange" transform="translate(22.000000, 24.000000)">
                                <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                                <path d="M12,22 C6.477,22 2,17.523 2,12 C2,6.477 6.477,2 12,2 C17.523,2 22,6.477 22,12 C22,17.523 17.523,22 12,22 Z M12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 Z M7,13 L16,13 L16,15 L12,15 L12,18 L7,13 Z M12,9 L12,6 L17,11 L8,11 L8,9 L12,9 Z" id="Shape" fill="#FFFFFF" fillRule="nonzero"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
}

export const IconChart = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g fill="none" fillRule="evenodd" className="website">
            <g className="website__batilex---wide-screen-menu" transform="translate(-21 -796)">
                <g className="website__batilex---wide-screen-menu__leftmenu-open-copy" transform="translate(-1)">
                    <g className="website__batilex---wide-screen-menu__leftmenu-open-copy__group"
                       transform="translate(0 77)">
                        <g className="website__batilex---wide-screen-menu__leftmenu-open-copy__group__invoices"
                           transform="translate(0 695)">
                            <g className="website__batilex---wide-screen-menu__leftmenu-open-copy__group__invoices__icon-chart"
                               transform="translate(22 24)">
                                <polygon points="0 0 24 0 24 24 0 24"
                                         className="website__batilex---wide-screen-menu__leftmenu-open-copy__group__invoices__icon-chart__path"/>
                                <path fill="#FFF" fillRule="nonzero"
                                      d="M5 3v16h16v2H3V3h2zm15.293 3.293l1.414 1.414L16 13.414l-3-2.999-4.293 4.292-1.414-1.414L13 7.586l3 2.999 4.293-4.292z"
                                      className="website__batilex---wide-screen-menu__leftmenu-open-copy__group__invoices__icon-chart__shape"/>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
};

export const IconProduct = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g fill="none" fillRule="evenodd" className="website">
            <g className="website__batilex---wide-screen-menu" transform="translate(-21 -587)">
                <g className="website__batilex---wide-screen-menu__leftmenu-open-copy" transform="translate(-1)">
                    <g className="website__batilex---wide-screen-menu__leftmenu-open-copy__group"
                       transform="translate(0 77)">
                        <g className="website__batilex---wide-screen-menu__leftmenu-open-copy__group__products"
                           transform="translate(0 486)">
                            <g className="website__batilex---wide-screen-menu__leftmenu-open-copy__group__products__icon-product"
                               transform="translate(22 24)">
                                <polygon points="0 0 24 0 24 24 0 24"
                                         className="website__batilex---wide-screen-menu__leftmenu-open-copy__group__products__icon-product__path"/>
                                <path fill="#FFF" fillRule="nonzero"
                                      d="M3 19V5.7a1 1 0 0 1 .658-.94l9.671-3.516a.5.5 0 0 1 .671.47v4.953l6.316 2.105a1 1 0 0 1 .684.949V19h2v2H1v-2h2zm2 0h7V3.855L5 6.401V19zm14 0v-8.558l-5-1.667V19h5z"
                                      className="website__batilex---wide-screen-menu__leftmenu-open-copy__group__products__icon-product__shape"/>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
};

export const IconTicket = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g fill="none" fillRule="evenodd" className="website">
            <g className="website__batilex---wide-screen-menu" transform="translate(-21 -726)">
                <g className="website__batilex---wide-screen-menu__leftmenu-open-copy" transform="translate(-1)">
                    <g className="website__batilex---wide-screen-menu__leftmenu-open-copy__group"
                       transform="translate(0 77)">
                        <g className="website__batilex---wide-screen-menu__leftmenu-open-copy__group__invoices"
                           transform="translate(0 625)">
                            <g className="website__batilex---wide-screen-menu__leftmenu-open-copy__group__invoices__icon-ticket"
                               transform="translate(22 24)">
                                <polygon points="0 0 24 0 24 24 0 24"
                                         className="website__batilex---wide-screen-menu__leftmenu-open-copy__group__invoices__icon-ticket__path"/>
                                <path fill="#FFF" fillRule="nonzero"
                                      d="M19 22H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12h4v4a3 3 0 0 1-3 3zm-1-5v2a1 1 0 0 0 2 0v-2h-2zm-2 3V4H4v15a1 1 0 0 0 1 1h11zM6 7h8v2H6V7zm0 4h8v2H6v-2zm0 4h5v2H6v-2z"
                                      className="website__batilex---wide-screen-menu__leftmenu-open-copy__group__invoices__icon-ticket__shape"/>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
};

export const IconChevron = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"/>
    </svg>
};

export const IconQuestionStatus = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} xmlns="http://www.w3.org/2000/svg" width="17px" height="16px" viewBox="0 0 17 16" version="1.1">
        <title>Icons/icon-question</title>
        <g id="R8---5-Dimensions" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Batilex-R8-Dashboard" transform="translate(-1078.000000, -539.000000)">
                <g id="Table" transform="translate(207.686217, 477.000000)">
                    <g id="Line" transform="translate(0.000000, 46.000000)">
                        <g id="Table/column-even" transform="translate(328.000000, 0.000000)">
                            <g id="Icons/icon-question" transform="translate(543.000000, 16.000000)">
                                <polygon id="Path" points="0 0 16 0 16 16 0 16"/>
                                <path d="M8,14.6666667 C4.318,14.6666667 1.33333333,11.682 1.33333333,8 C1.33333333,4.318 4.318,1.33333333 8,1.33333333 C11.682,1.33333333 14.6666667,4.318 14.6666667,8 C14.6666667,11.682 11.682,14.6666667 8,14.6666667 Z M7.33333333,10 L7.33333333,11.3333333 L8.66666667,11.3333333 L8.66666667,10 L7.33333333,10 Z M8.66666667,8.90333333 C9.77400986,8.56958381 10.4701047,7.47541026 10.3031561,6.33097771 C10.1362075,5.18654517 9.1565403,4.33682998 8,4.33333333 C6.88771679,4.33324856 5.92991398,5.11807213 5.71133333,6.20866667 L7.01933333,6.47066667 C7.12257978,5.95411632 7.60883591,5.60623098 8.13105575,5.67529997 C8.6532756,5.74436896 9.03237141,6.20670606 8.99777863,6.73233657 C8.96318585,7.25796708 8.52676759,7.6666336 8,7.66666667 C7.63181017,7.66666667 7.33333333,7.9651435 7.33333333,8.33333333 L7.33333333,9.33333333 L8.66666667,9.33333333 L8.66666667,8.90333333 Z" id="Shape" fill="#33BAB3" fillRule="nonzero"/>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>;
}

export const IconBulletVCheck = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} width="16px" height="16px" viewBox="0 0 16 16" version="1.1"
                xmlns="http://www.w3.org/2000/svg">
        <title>icons/icon-bullet-vcheck</title>
        <g id="R8---5-Dimensions" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Batilex-R8-DimensionDetails-01" transform="translate(-422.000000, -401.000000)" fill="#00B424" fillRule="nonzero">
                <g id="/-TABS" transform="translate(208.000000, 386.000000)">
                    <g id="Components/Tabs/Tab-Active" transform="translate(171.000000, 0.000000)">
                        <g id="icons/icon-bullet-vcheck" transform="translate(43.000000, 15.000000)">
                            <path d="M8,16 C3.5816,16 0,12.4184 0,8 C0,3.5816 3.5816,0 8,0 C12.4184,0 16,3.5816 16,8 C16,12.4184 12.4184,16 8,16 Z M7.2024,11.2 L12.8584,5.5432 L11.7272,4.412 L7.2024,8.9376 L4.9392,6.6744 L3.808,7.8056 L7.2024,11.2 Z" id="Shape"></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
};

export const IconBulletGreyStop = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" >
        <title>icons/icon-bullet-greystop</title>
        <g id="R8---5-Dimensions" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Batilex-R8-DimensionDetails-01" transform="translate(-743.000000, -402.000000)" fill="#A3A3A2" fillRule="nonzero">
                <g id="/-TABS" transform="translate(208.000000, 386.000000)">
                    <g id="Components/Tabs/Tab-Active-Copy-2" transform="translate(513.000000, 0.000000)">
                        <g id="Group-6" transform="translate(22.000000, 15.000000)">
                            <g id="icons/icon-bullet-greystop" transform="translate(0.000000, 1.000000)">
                                <path d="M8,0 C12.4184,0 16,3.5816 16,8 C16,12.4184 12.4184,16 8,16 C3.5816,16 0,12.4184 0,8 C0,3.5816 3.5816,0 8,0 Z M12,7.2 L4,7.2 L4,8.8 L12,8.8 L12,7.2 Z" id="Shape"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
};

export const IconBulletRedStop = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>icons/icon-bullet-redstop</title>
        <g id="R8---5-Dimensions" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Batilex-R8-DimensionDetails-01" transform="translate(-916.000000, -402.000000)" fill="#F8000C" fillRule="nonzero">
                <g id="/-TABS" transform="translate(208.000000, 386.000000)">
                    <g id="Components/Tabs/Tab-Active-Copy-3" transform="translate(684.000000, 0.000000)">
                        <g id="Group-3" transform="translate(24.000000, 15.000000)">
                            <g id="icons/icon-bullet-redstop" transform="translate(0.000000, 1.000000)">
                                <path d="M8,16 C3.5816,16 0,12.4184 0,8 C0,3.5816 3.5816,0 8,0 C12.4184,0 16,3.5816 16,8 C16,12.4184 12.4184,16 8,16 Z M8,6.8688 L5.7376,4.6056 L4.6056,5.7376 L6.8688,8 L4.6056,10.2624 L5.7376,11.3944 L8,9.1312 L10.2624,11.3944 L11.3944,10.2624 L9.1312,8 L11.3944,5.7376 L10.2624,4.6056 L8,6.8688 Z" id="Shape-Copy"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
};

export const IconBulletWarning = ({ className }) => {
    return <svg className={`svg-inline ${className ? className : ''}`} width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>icons/icon-bullet-warning</title>
        <g id="R8---5-Dimensions" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Batilex-R8-DimensionDetails-01" transform="translate(-577.000000, -402.000000)" fill="#F28100" fillRule="nonzero">
                <g id="/-TABS" transform="translate(208.000000, 386.000000)">
                    <g id="Components/Tabs/Tab-Active-Copy" transform="translate(342.000000, 0.000000)">
                        <g id="Group-7" transform="translate(27.000000, 15.000000)">
                            <g id="icons/icon-bullet-warning" transform="translate(0.000000, 1.000000)">
                                <path d="M8.65818133,0.432395408 L15.898176,14.7026996 C16.0339396,14.970287 16.0339414,15.2999677 15.8981808,15.567557 C15.7624202,15.8351463 15.5115219,16 15.2399947,16 L0.760005328,16 C0.488478127,16 0.23757978,15.8351463 0.101819167,15.567557 C-0.0339414467,15.2999677 -0.0339396067,14.970287 0.101823994,14.7026996 L7.34181867,0.432395408 C7.47758904,0.164826096 7.72848315,0 8,0 C8.27151685,0 8.52241096,0.164826096 8.65818133,0.432395408 Z M7.23997537,11.6756654 L7.23997537,13.4053992 L8.76002463,13.4053992 L8.76002463,11.6756654 L7.23997537,11.6756654 Z M7.23997537,5.62159694 L7.23997537,9.94593155 L8.76002463,9.94593155 L8.76002463,5.62159694 L7.23997537,5.62159694 Z" id="Shape"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
};

