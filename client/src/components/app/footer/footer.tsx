import React from 'react';
import { Avatar, Space, Tooltip } from 'antd';
import { RssLogo } from '@client/components/app/footer/rss-svg';
import { getAvatar, getGithub, links, RSS_LINK } from './footer.config';
import {
  LinkCard,
  FooterLayoutContainer,
  StyledFooter,
  StyledSection,
  StyledTitle,
  LogoLink,
  StyledTime,
} from './footer.styles';

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
            <Tooltip key={id} title={title} placement="right">
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
