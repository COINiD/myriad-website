import React from "react"
import { Link } from "gatsby"
import tw from "twin.macro"
import SEO from "../components/seo"
import Wallet from "../components/shared/wallet"
import Links from "../components/shared/links"
import Price from "../components/shared/price"
import Exchanges from "../components/shared/exchanges"
import BgImage from "../components/bg-image"
import Cover from "../components/shared/cover"

import IconArrowForward from "../svgs/icons/arrow-forward.inline.svg"

import {
  PageContainer,
  BigText,
  MediumBoldText,
  BodyText,
  LinkButton,
} from "../common/elements"
import { useTranslation } from "react-i18next"

const HoldPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <SEO title={t("hold.title")} />
      <PageContainer>
        <Cover showArrow>{t("hold.title")}</Cover>
      </PageContainer>
      <div tw="bg-light-grey dark:bg-dark-light-bg py-24 px-6 sm:py-30 ">
        <PageContainer tw="flex flex-col sm:flex-row">
          <div>
            <MediumBoldText>{t("hold.buy.title")}</MediumBoldText>
            <BodyText tw="mb-12">{t("hold.buy.body")}</BodyText>
            <Price />
          </div>
          <Exchanges />
        </PageContainer>
      </div>
      <div tw="bg-black relative">
        <PageContainer id="download">
          <Wallet title={t("hold.wallet.title")} />
        </PageContainer>
      </div>
      <PageContainer tw="py-24 px-6 sm:py-30 ">
        <MediumBoldText>{t("hold.use.title")}</MediumBoldText>
        <BodyText tw="mb-12">{t("hold.use.body")}</BodyText>
        <LinkButton href="XXXX">{t("hold.use.link")}</LinkButton>
      </PageContainer>
      <hr tw="border-black border-opacity-25 dark:border-opacity-75" />
      <PageContainer tw="py-24 sm:py-30 px-6">
        <BigText tw="mb-32">{t("hold.links.title")}</BigText>
        <Links skip={["hold"]} />
      </PageContainer>
      <BgImage filename="grad-2.png">
        <PageContainer tw="py-24 px-6 sm:py-30  text-right text-white overflow-hidden">
          <BigText tw="mb-16 sm:mb-24 text-xl">{t("hold.fair.title")}</BigText>
          <Link
            to="/about"
            tw="underline text-xl sm:text-2xl font-bold leading-extra-tight hover:text-black inline-flex"
          >
            {t("hold.fair.link")}
            <IconArrowForward tw="ml-4" />
          </Link>
        </PageContainer>
      </BgImage>
    </>
  )
}

export default HoldPage
