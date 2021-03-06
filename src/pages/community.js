import React from "react"
import tw from "twin.macro"
import SEO from "../components/seo"
import SvgIcon from "../components/svg-icon"
import SymbolBox from "../components/symbol-box"
import Link from "../components/shared/link"
import Cover from "../components/shared/cover"

import { PageContainer, MediumBoldText, BodyText } from "../common/elements"
import { useTranslation, Trans } from "react-i18next"

const communities = [
  {
    text: "Reddit",
    url: "https://www.reddit.com/r/myriadcoin/",
  },
  {
    text: "Telegram",
    url: "https://t.me/Myriadcoinofficial",
  },
  {
    text: "Discord",
    url: "https://discord.gg/fbDrFWZ",
  },
  {
    text: "Twitter",
    url: "https://twitter.com/myriadcoin",
  },
  {
    text: "Instagram",
    url: "https://www.instagram.com/myriadcoin",
  },
]

const CommunityLink = ({ text, url }) => {
  return (
    <Link uri={url} title={text} tw="mr-6 sm:mr-10 mb-4">
      <SvgIcon name={text} size="lg" />
    </Link>
  )
}

const CommunityPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <SEO title={t("community.title")} />
      <PageContainer>
        <Cover showArrow>{t("community.title")}</Cover>
      </PageContainer>
      <div tw="bg-light-grey dark:bg-dark-light-bg py-24 px-6 sm:py-30 ">
        <PageContainer>
          <div tw="flex flex-row">
            <SymbolBox symbol="control" left alternate />
            <div>
              <MediumBoldText>{t("community.top.title")}</MediumBoldText>
              <BodyText>{t("community.top.body")}</BodyText>
            </div>
          </div>
        </PageContainer>
      </div>
      <PageContainer tw="py-24 px-6 sm:py-30 ">
        <div tw="max-w-2xl">
          <MediumBoldText tw="mb-8 sm:mb-12">
            {t("community.social_media.title")}
          </MediumBoldText>
          <div tw="flex flex-wrap mb-4 sm:mb-8 -mr-6 sm:-mr-10">
            {communities.map(({ text, url }) => (
              <CommunityLink
                text={text}
                url={url}
                key={`community-link-${text}`}
              />
            ))}
          </div>
          <BodyText>
            <Trans i18nKey="community.social_media.body">
              We are also on{" "}
              <Link uri="https://bitcointalk.org/index.php?topic=483515.0">
                Bitcointalk
              </Link>{" "}
              and on our own{" "}
              <Link uri="https://webchat.freenode.net/##myriadcoin">
                IRC channel
              </Link>
            </Trans>
          </BodyText>
        </div>
      </PageContainer>
      <hr tw="border-black border-opacity-25 dark:border-opacity-75" />
    </>
  )
}

export default CommunityPage
