import * as React from 'react'
import {
  FaAddressBook,
  FaAddressCard,
  FaAngleDoubleDown,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaAngleUp,
  FaArchive,
  FaArrowAltCircleDown,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaArrowAltCircleUp,
  FaArrowCircleDown,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaArrowsAlt,
  FaArrowsAltH,
  FaArrowsAltV,
  FaAsterisk,
  FaBan,
  FaBars,
  FaBell,
  FaBellSlash,
  FaBirthdayCake,
  FaBolt,
  FaBook,
  FaBookOpen,
  FaBookmark,
  FaBox,
  FaBoxOpen,
  FaBoxes,
  FaBriefcase,
  FaBuilding,
  FaBullhorn,
  FaBus,
  FaBusAlt,
  FaBusinessTime,
  FaCalculator,
  FaCalendar,
  FaCalendarAlt,
  FaCalendarCheck,
  FaCalendarDay,
  FaCalendarMinus,
  FaCalendarPlus,
  FaCalendarTimes,
  FaCalendarWeek,
  FaCamera,
  FaCar,
  FaCarAlt,
  FaCarSide,
  FaCaretDown,
  FaCaretLeft,
  FaCaretRight,
  FaCaretUp,
  FaCaretSquareDown,
  FaCaretSquareLeft,
  FaCaretSquareRight,
  FaCaretSquareUp,
  FaChartArea,
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaCheck,
  FaCheckCircle,
  FaCheckSquare,
  FaChevronCircleDown,
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaChevronCircleUp,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
  FaCircle,
  FaClipboard,
  FaClipboardCheck,
  FaClipboardList,
  FaClock,
  FaClone,
  FaCloud,
  FaCloudDownloadAlt,
  FaCloudUploadAlt,
  FaCode,
  FaCog,
  FaCogs,
  FaCoins,
  FaColumns,
  FaComment,
  FaCommentAlt,
  FaCommentDots,
  FaCommentSlash,
  FaComments,
  FaCompress,
  FaCopy,
  FaCreditCard,
  FaCube,
  FaCubes,
  FaDatabase,
  FaDoorClosed,
  FaDoorOpen,
  FaEdit,
  FaEllipsisH,
  FaEllipsisV,
  FaEnvelope,
  FaEnvelopeOpen,
  FaEnvelopeOpenText,
  FaExchangeAlt,
  FaExclamation,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaExpand,
  FaExpandArrowsAlt,
  FaExternalLinkAlt,
  FaEye,
  FaEyeSlash,
  FaFile,
  FaFileAlt,
  FaFileArchive,
  FaFileDownload,
  FaFileExport,
  FaFileImport,
  FaFileUpload,
  FaFilter,
  FaFlag,
  FaFolder,
  FaFolderMinus,
  FaFolderOpen,
  FaFolderPlus,
  FaFont,
  FaForward,
  FaGift,
  FaGlobe,
  FaGraduationCap,
  FaGripHorizontal,
  FaGripLines,
  FaGripLinesVertical,
  FaGripVertical,
  FaHandPaper,
  FaHandPointDown,
  FaHandPointLeft,
  FaHandPointRight,
  FaHandPointUp,
  FaHands,
  FaHandshake,
  FaHeart,
  FaHistory,
  FaHome,
  FaHospital,
  FaHospitalAlt,
  FaHourglass,
  FaHourglassEnd,
  FaHourglassHalf,
  FaHourglassStart,
  FaIdBadge,
  FaIdCard,
  FaIdCardAlt,
  FaImage,
  FaImages,
  FaInbox,
  FaInfo,
  FaInfoCircle,
  FaKey,
  FaKeyboard,
  FaLightbulb,
  FaLink,
  FaList,
  FaListAlt,
  FaListOl,
  FaListUl,
  FaLock,
  FaLockOpen,
  FaLongArrowAltDown,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaLongArrowAltUp,
  FaMinus,
  FaMinusCircle,
  FaMinusSquare,
  FaMobile,
  FaMobileAlt,
  FaMoneyBill,
  FaMoneyBillAlt,
  FaMoneyBillWave,
  FaMoneyBillWaveAlt,
  FaMoneyCheck,
  FaMoneyCheckAlt,
  FaPaperPlane,
  FaPaperclip,
  FaPaste,
  FaPen,
  FaPencilAlt,
  FaPhone,
  FaPhoneSlash,
  FaPiggyBank,
  FaPlane,
  FaPlay,
  FaPlayCircle,
  FaPlus,
  FaPlusCircle,
  FaPlusSquare,
  FaPoll,
  FaPollH,
  FaPortrait,
  FaPowerOff,
  FaPrint,
  FaQrcode,
  FaQuestion,
  FaQuestionCircle,
  FaRandom,
  FaReceipt,
  FaRedo,
  FaRedoAlt,
  FaRegDotCircle,
  FaReply,
  FaReplyAll,
  FaRocket,
  FaSave,
  FaSearch,
  FaSearchMinus,
  FaSearchPlus,
  FaShare,
  FaShareAlt,
  FaShareSquare,
  FaShieldAlt,
  FaShoppingBag,
  FaShoppingBasket,
  FaShoppingCart,
  FaSignInAlt,
  FaSignOutAlt,
  FaSlidersH,
  FaSort,
  FaSortAlphaDown,
  FaSortAlphaUp,
  FaSortAmountDown,
  FaSortAmountUp,
  FaSortDown,
  FaSortNumericDown,
  FaSortNumericUp,
  FaSortUp,
  FaStar,
  FaStepBackward,
  FaStepForward,
  FaStickyNote,
  FaStop,
  FaStopCircle,
  FaStream,
  FaSubway,
  FaSync,
  FaSyncAlt,
  FaTable,
  FaTablet,
  FaTabletAlt,
  FaTag,
  FaTags,
  FaTasks,
  FaTaxi,
  FaTh,
  FaThLarge,
  FaThList,
  FaTimes,
  FaTimesCircle,
  FaToolbox,
  FaTools,
  FaTrash,
  FaTrashAlt,
  FaTrashRestore,
  FaTrashRestoreAlt,
  FaUndo,
  FaUndoAlt,
  FaUnlink,
  FaUnlock,
  FaUnlockAlt,
  FaUser,
  FaUserAlt,
  FaUserAltSlash,
  FaUserCheck,
  FaUserCog,
  FaUserEdit,
  FaUserCircle,
  FaUserMinus,
  FaUserPlus,
  FaUserSlash,
  FaUsers,
  FaUsersCog,
  FaVideo,
  FaVideoSlash,
  FaVolumeDown,
  FaVolumeMute,
  FaVolumeOff,
  FaVolumeUp,
  FaWallet,
  FaWindowClose,
  FaWindowMaximize,
  FaWindowMinimize,
  FaWindowRestore,
  FaWrench,
  FaYenSign,
} from 'react-icons/fa'

export interface IconProps {
  color?: string
  size?: number
}

export interface Props extends IconProps {
  name: keyof typeof iconMap
  className?: string
}

export const iconMap = {
  'fa-address-book': FaAddressBook,
  'fa-address-card': FaAddressCard,
  'fa-angle-double-down': FaAngleDoubleDown,
  'fa-angle-double-left': FaAngleDoubleLeft,
  'fa-angle-double-right': FaAngleDoubleRight,
  'fa-angle-down': FaAngleDown,
  'fa-angle-left': FaAngleLeft,
  'fa-angle-right': FaAngleRight,
  'fa-angle-up': FaAngleUp,
  'fa-archive': FaArchive,
  'fa-arrow-circle-down': FaArrowCircleDown,
  'fa-arrow-alt-circle-down': FaArrowAltCircleDown,
  'fa-arrow-alt-circle-left': FaArrowAltCircleLeft,
  'fa-arrow-alt-circle-right': FaArrowAltCircleRight,
  'fa-arrow-alt-circle-up': FaArrowAltCircleUp,
  'fa-arrow-down': FaArrowDown,
  'fa-arrow-left': FaArrowLeft,
  'fa-arrow-right': FaArrowRight,
  'fa-arrow-up': FaArrowUp,
  'fa-arrows-alt': FaArrowsAlt,
  'fa-arrows-alt-h': FaArrowsAltH,
  'fa-arrows-alt-v': FaArrowsAltV,
  'fa-asterisk': FaAsterisk,
  'fa-ban': FaBan,
  'fa-bars': FaBars,
  'fa-bell': FaBell,
  'fa-bell-slash': FaBellSlash,
  'fa-birthday-cake': FaBirthdayCake,
  'fa-bolt': FaBolt,
  'fa-book': FaBook,
  'fa-book-open': FaBookOpen,
  'fa-bookmark': FaBookmark,
  'fa-box': FaBox,
  'fa-box-open': FaBoxOpen,
  'fa-boxes': FaBoxes,
  'fa-briefcase': FaBriefcase,
  'fa-building': FaBuilding,
  'fa-bullhorn': FaBullhorn,
  'fa-bus': FaBus,
  'fa-bus-alt': FaBusAlt,
  'fa-business-time': FaBusinessTime,
  'fa-calculator': FaCalculator,
  'fa-calendar': FaCalendar,
  'fa-calendar-alt': FaCalendarAlt,
  'fa-calendar-check': FaCalendarCheck,
  'fa-calendar-day': FaCalendarDay,
  'fa-calendar-minus': FaCalendarMinus,
  'fa-calendar-plus': FaCalendarPlus,
  'fa-calendar-times': FaCalendarTimes,
  'fa-calendar-week': FaCalendarWeek,
  'fa-camera': FaCamera,
  'fa-car': FaCar,
  'fa-car-alt': FaCarAlt,
  'fa-car-side': FaCarSide,
  'fa-caret-down': FaCaretDown,
  'fa-caret-left': FaCaretLeft,
  'fa-caret-right': FaCaretRight,
  'fa-caret-square-down': FaCaretSquareDown,
  'fa-caret-square-left': FaCaretSquareLeft,
  'fa-caret-square-right': FaCaretSquareRight,
  'fa-caret-square-up': FaCaretSquareUp,
  'fa-caret-up': FaCaretUp,
  'fa-chart-area': FaChartArea,
  'fa-chart-bar': FaChartBar,
  'fa-chart-line': FaChartLine,
  'fa-chart-pie': FaChartPie,
  'fa-check': FaCheck,
  'fa-check-circle': FaCheckCircle,
  'fa-check-square': FaCheckSquare,
  'fa-chevron-circle-down': FaChevronCircleDown,
  'fa-chevron-circle-left': FaChevronCircleLeft,
  'fa-chevron-circle-right': FaChevronCircleRight,
  'fa-chevron-circle-up': FaChevronCircleUp,
  'fa-chevron-down': FaChevronDown,
  'fa-chevron-left': FaChevronLeft,
  'fa-chevron-right': FaChevronRight,
  'fa-chevron-up': FaChevronUp,
  'fa-circle': FaCircle,
  'fa-clipboard': FaClipboard,
  'fa-clipboard-check': FaClipboardCheck,
  'fa-clipboard-list': FaClipboardList,
  'fa-clock': FaClock,
  'fa-clone': FaClone,
  'fa-cloud': FaCloud,
  'fa-cloud-download-alt': FaCloudDownloadAlt,
  'fa-cloud-upload-alt': FaCloudUploadAlt,
  'fa-code': FaCode,
  'fa-cog': FaCog,
  'fa-cogs': FaCogs,
  'fa-coins': FaCoins,
  'fa-columns': FaColumns,
  'fa-comment': FaComment,
  'fa-comment-alt': FaCommentAlt,
  'fa-comment-dots': FaCommentDots,
  'fa-comment-slash': FaCommentSlash,
  'fa-comments': FaComments,
  'fa-compress': FaCompress,
  'fa-copy': FaCopy,
  'fa-credit-card': FaCreditCard,
  'fa-cube': FaCube,
  'fa-cubes': FaCubes,
  'fa-database': FaDatabase,
  'fa-door-closed': FaDoorClosed,
  'fa-door-open': FaDoorOpen,
  'fa-edit': FaEdit,
  'fa-ellipsis-h': FaEllipsisH,
  'fa-ellipsis-v': FaEllipsisV,
  'fa-envelope': FaEnvelope,
  'fa-envelope-open': FaEnvelopeOpen,
  'fa-envelope-open-text': FaEnvelopeOpenText,
  'fa-exchange-alt': FaExchangeAlt,
  'fa-exclamation': FaExclamation,
  'fa-exclamation-circle': FaExclamationCircle,
  'fa-exclamation-triangle': FaExclamationTriangle,
  'fa-expand': FaExpand,
  'fa-expand-arrows-alt': FaExpandArrowsAlt,
  'fa-external-link-alt': FaExternalLinkAlt,
  'fa-eye': FaEye,
  'fa-eye-slash': FaEyeSlash,
  'fa-file': FaFile,
  'fa-file-alt': FaFileAlt,
  'fa-file-archive': FaFileArchive,
  'fa-file-download': FaFileDownload,
  'fa-file-export': FaFileExport,
  'fa-file-import': FaFileImport,
  'fa-file-upload': FaFileUpload,
  'fa-filter': FaFilter,
  'fa-flag': FaFlag,
  'fa-folder': FaFolder,
  'fa-folder-minus': FaFolderMinus,
  'fa-folder-open': FaFolderOpen,
  'fa-folder-plus': FaFolderPlus,
  'fa-font': FaFont,
  'fa-forward': FaForward,
  'fa-gift': FaGift,
  'fa-globe': FaGlobe,
  'fa-graduation-cap': FaGraduationCap,
  'fa-grip-horizontal': FaGripHorizontal,
  'fa-grip-lines': FaGripLines,
  'fa-grip-lines-vertical': FaGripLinesVertical,
  'fa-grip-vertical': FaGripVertical,
  'fa-hand-paper': FaHandPaper,
  'fa-hand-point-down': FaHandPointDown,
  'fa-hand-point-left': FaHandPointLeft,
  'fa-hand-point-right': FaHandPointRight,
  'fa-hand-point-up': FaHandPointUp,
  'fa-hands': FaHands,
  'fa-handshake': FaHandshake,
  'fa-heart': FaHeart,
  'fa-history': FaHistory,
  'fa-home': FaHome,
  'fa-hospital': FaHospital,
  'fa-hospital-alt': FaHospitalAlt,
  'fa-hourglass': FaHourglass,
  'fa-hourglass-end': FaHourglassEnd,
  'fa-hourglass-half': FaHourglassHalf,
  'fa-hourglass-start': FaHourglassStart,
  'fa-id-badge': FaIdBadge,
  'fa-id-card': FaIdCard,
  'fa-id-card-alt': FaIdCardAlt,
  'fa-image': FaImage,
  'fa-images': FaImages,
  'fa-inbox': FaInbox,
  'fa-info': FaInfo,
  'fa-info-circle': FaInfoCircle,
  'fa-key': FaKey,
  'fa-keyboard': FaKeyboard,
  'fa-lightbulb': FaLightbulb,
  'fa-link': FaLink,
  'fa-list': FaList,
  'fa-list-alt': FaListAlt,
  'fa-list-ol': FaListOl,
  'fa-list-ul': FaListUl,
  'fa-lock': FaLock,
  'fa-lock-open': FaLockOpen,
  'fa-long-arrow-alt-down': FaLongArrowAltDown,
  'fa-long-arrow-alt-left': FaLongArrowAltLeft,
  'fa-long-arrow-alt-right': FaLongArrowAltRight,
  'fa-long-arrow-alt-up': FaLongArrowAltUp,
  'fa-minus': FaMinus,
  'fa-minus-circle': FaMinusCircle,
  'fa-minus-square': FaMinusSquare,
  'fa-mobile': FaMobile,
  'fa-mobile-alt': FaMobileAlt,
  'fa-monye-bill': FaMoneyBill,
  'fa-monye-bill-alt': FaMoneyBillAlt,
  'fa-monye-bill-wave': FaMoneyBillWave,
  'fa-monye-bill-wave-alt': FaMoneyBillWaveAlt,
  'fa-monye-check': FaMoneyCheck,
  'fa-monye-check-alt': FaMoneyCheckAlt,
  'fa-paper-plane': FaPaperPlane,
  'fa-paperclip': FaPaperclip,
  'fa-paste': FaPaste,
  'fa-pen': FaPen,
  'fa-pencil-alt': FaPencilAlt,
  'fa-phone': FaPhone,
  'fa-phone-slash': FaPhoneSlash,
  'fa-piggy-bank': FaPiggyBank,
  'fa-plane': FaPlane,
  'fa-play': FaPlay,
  'fa-play-circle': FaPlayCircle,
  'fa-plus': FaPlus,
  'fa-plus-circle': FaPlusCircle,
  'fa-plus-square': FaPlusSquare,
  'fa-poll': FaPoll,
  'fa-poll-h': FaPollH,
  'fa-portrait': FaPortrait,
  'fa-power-off': FaPowerOff,
  'fa-print': FaPrint,
  'fa-qrcode': FaQrcode,
  'fa-question': FaQuestion,
  'fa-question-circle': FaQuestionCircle,
  'fa-randome': FaRandom,
  'fa-receipt': FaReceipt,
  'fa-redo': FaRedo,
  'fa-redo-alt': FaRedoAlt,
  'fa-reg-dot-circle': FaRegDotCircle,
  'fa-reply': FaReply,
  'fa-reply-all': FaReplyAll,
  'fa-rocket': FaRocket,
  'fa-save': FaSave,
  'fa-search': FaSearch,
  'fa-search-minus': FaSearchMinus,
  'fa-search-plus': FaSearchPlus,
  'fa-share': FaShare,
  'fa-share-alt': FaShareAlt,
  'fa-share-square': FaShareSquare,
  'fa-shield-alt': FaShieldAlt,
  'fa-shopping-bag': FaShoppingBag,
  'fa-shopping-basket': FaShoppingBasket,
  'fa-shopping-cart': FaShoppingCart,
  'fa-sign-in-alt': FaSignInAlt,
  'fa-sign-out-alt': FaSignOutAlt,
  'fa-sliders-h': FaSlidersH,
  'fa-sort': FaSort,
  'fa-sort-alpha-down': FaSortAlphaDown,
  'fa-sort-alpha-up': FaSortAlphaUp,
  'fa-sort-amount-down': FaSortAmountDown,
  'fa-sort-amount-up': FaSortAmountUp,
  'fa-sort-down': FaSortDown,
  'fa-sort-numeric-down': FaSortNumericDown,
  'fa-sort-numeric-up': FaSortNumericUp,
  'fa-sort-up': FaSortUp,
  'fa-star': FaStar,
  'fa-step-backward': FaStepBackward,
  'fa-step-forward': FaStepForward,
  'fa-sticky-note': FaStickyNote,
  'fa-stop': FaStop,
  'fa-stop-circle': FaStopCircle,
  'fa-stream': FaStream,
  'fa-subway': FaSubway,
  'fa-sync': FaSync,
  'fa-sync-alt': FaSyncAlt,
  'fa-table': FaTable,
  'fa-tablet': FaTablet,
  'fa-tablet-alt': FaTabletAlt,
  'fa-tag': FaTag,
  'fa-tags': FaTags,
  'fa-task': FaTasks,
  'fa-taxi': FaTaxi,
  'fa-th': FaTh,
  'fa-th-large': FaThLarge,
  'fa-th-list': FaThList,
  'fa-times': FaTimes,
  'fa-times-circle': FaTimesCircle,
  'fa-toolbox': FaToolbox,
  'fa-tools': FaTools,
  'fa-trash': FaTrash,
  'fa-trash-alt': FaTrashAlt,
  'fa-trash-restore': FaTrashRestore,
  'fa-trash-restore-alt': FaTrashRestoreAlt,
  'fa-undo': FaUndo,
  'fa-undo-alt': FaUndoAlt,
  'fa-unlink': FaUnlink,
  'fa-unlock': FaUnlock,
  'fa-unlock-alt': FaUnlockAlt,
  'fa-user': FaUser,
  'fa-user-alt': FaUserAlt,
  'fa-user-alt-slash': FaUserAltSlash,
  'fa-user-check': FaUserCheck,
  'fa-user-circle': FaUserCircle,
  'fa-user-cog': FaUserCog,
  'fa-user-edit': FaUserEdit,
  'fa-user-minus': FaUserMinus,
  'fa-user-plus': FaUserPlus,
  'fa-user-slash': FaUserSlash,
  'fa-users': FaUsers,
  'fa-users-cog': FaUsersCog,
  'fa-video': FaVideo,
  'fa-video-slash': FaVideoSlash,
  'fa-volume-down': FaVolumeDown,
  'fa-volume-mute': FaVolumeMute,
  'fa-volume-off': FaVolumeOff,
  'fa-volume-up': FaVolumeUp,
  'fa-wallet': FaWallet,
  'fa-window-close': FaWindowClose,
  'fa-window-maximize': FaWindowMaximize,
  'fa-window-minimize': FaWindowMinimize,
  'fa-window-restore': FaWindowRestore,
  'fa-wrench': FaWrench,
  'fa-yen-sign': FaYenSign,
}
export const Icon: React.FC<Props> = ({ name, className = '', ...props }) => {
  const SvgIcon = iconMap[name]
  return <SvgIcon className={className} {...props} />
}
