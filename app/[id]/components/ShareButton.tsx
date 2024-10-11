'use client'

import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from 'react-share'

const ShareButton = ({ url, title }: { url: string; title: string }) => {
  return (
    <div className="flex gap-2">
      <TwitterShareButton title={title} url={url}>
        <XIcon size={24} className="rounded" />
      </TwitterShareButton>
      <FacebookShareButton title={title} url={url}>
        <FacebookIcon size={24} className="rounded" />
      </FacebookShareButton>
      <WhatsappShareButton title={title} url={url}>
        <WhatsappIcon size={24} className="rounded" />
      </WhatsappShareButton>
    </div>
  )
}

export default ShareButton
