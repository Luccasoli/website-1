import React from 'react';
import NextLink from 'next/link';
import {
  Section,
  Container,
  Heading,
  Link,
  Avatar,
  Flex,
  Button,
  Paragraph,
  Separator,
  Box,
  Grid,
  Text,
} from '@modulz/design-system';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { MainHero } from '@components/marketing/MainHero';
import { ComponentDetails } from '@components/marketing/ComponentDetails';
import { CaseStudiesHero } from '@components/marketing/CaseStudiesHero';
import { BenefitsHero } from '@components/marketing/BenefitsHero';
import { AccessibilityHero } from '@components/marketing/AccessibilityHero';
import { DeveloperExperienceHero } from '@components/marketing/DeveloperExperienceHero';
import { DeveloperObjectionsHero } from '@components/marketing/DeveloperObjectionsHero';
import { CommunityLinks } from '@components/marketing/CommunityLinks';
import { ProductsLinks } from '@components/marketing/ProductsLinks';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { Background } from '@components/marketing/Background';

// TODO check that all paragraphs are P tags
export default function PrimitivesHome() {
  return (
    <Box>
      <TitleAndMetaTags
        title="Primitives — Radix UI"
        description="An open-source React component library for building high-quality, accessible design systems and web apps."
        // TODO meta image
        image="colors.png"
      />
      <Background />
      <Header />
      <MainHero />
      <CaseStudiesHero />
      <BenefitsHero />
      <ComponentDetails />
      <AccessibilityHero />
      <DeveloperExperienceHero />
      <DeveloperObjectionsHero />
      <CommunityLinks />
      <ProductsLinks />
      <Footer />
    </Box>
  );
}
