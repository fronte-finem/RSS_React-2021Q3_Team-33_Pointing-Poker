import React from 'react';
import { Avatar, Space, Tooltip } from 'antd';
import {
  LinkCard,
  FooterLayoutContainer,
  StyledFooter,
  StyledSection,
  StyledTitle,
  LogoLink,
  StyledTime,
} from '@client/components/app/footer/footer.styles';
import {
  getAvatar,
  getGithub,
  links,
  RSS_LINK,
} from '@client/components/app/footer/footer.config';
import { RssLogo } from '@client/components/app/footer/rss-svg';

export const Footer = () => (
  <StyledFooter>
    <FooterLayoutContainer>
      <StyledSection>
        <LogoLink href={RSS_LINK} target="_blank">
          <RssLogo width={200} height={100} fill="currentColor" />
        </LogoLink>
        <StyledTime dateTime="2021-09">09.2021</StyledTime>
      </StyledSection>
      <StyledSection>
        <Space direction="vertical">
          <StyledTitle level={4}>Team 33</StyledTitle>
          {links.map(({ title, name, id }) => (
            <Tooltip title={title} placement="right">
              <LinkCard href={getGithub(name)} team={title} target="_blank">
                <Space>
                  <Avatar src={getAvatar(id)} />
                  {name}
                </Space>
              </LinkCard>
            </Tooltip>
          ))}
        </Space>
      </StyledSection>
    </FooterLayoutContainer>
  </StyledFooter>
);
