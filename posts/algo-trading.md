---
title: "Algorithmic Trading"
date: "January 5, 2026"
---

## Disclaimer

This is in no way financial advice, I'm just an overly risk-seeking 21-year old who's okay with losing a bit of his retirement money after watching a couple YouTube videos and has now convinced himself he can generate alpha. Please please please do not take this as financial advice. 

Candidly, this project didn't even end perfectly, which is why I thought it'd be good to share since I'm hoping some of the lessons I learned might be helpful to others. 

## Introduction 

In late August, 2025, I became interested in the concept of algorithmic trading. While I'd heard of other friends becoming "quants" and earning ridiculous salaries, the field never interested me. I always related it to high-frequency trading, a specific niche where firms perform micro-transactions as a method to glean profits from the market. It was only after a friend introduced a much more measured form of algorithmic trading that I began to take interest. He gave me an hour-long walkthrough (which I will do my best to summarrize in this entry) of what it means to generate, backtest, and then deploy a strategy. 

## Strategies

I've come to define strategies as deployments of hypotheses that people believe will make money in the market. The most popular strategy in recent history has been the buy-and-hold strategy where someone would buy a stable performer like the SNP and hold it for decades. 

For me, this was always "enough" since I wasn't interested in hyper-optimizing my trading strategy. However, I've come to appreciate the idea that simple hypothesis can be powerful investmet strategies. For example, let's create a combined strategy with the two following governing hypothesis: 

* when stocks are overbought, the market will be more volatile as stocks settle to their average price
* under normal market conditions and with a long-term investment horizon, wealth will centralize in the market

While seemingly simple, I want to show that these hypothesis can be combined to perform much better than simply buying and holding a single stock. 

## Development

Now that we have these initial hypotheses, we need to develop and backtest a strategy. For the first hypothesis (commonly referred to as mean reversion), the intuition is similar to the biological concept of "homeostasis". When a stock is overbought, the market will tend to frantically buy and sell the stock as individual players attempt to gain profit. During this process, the value of the volatility (VIXM) will increase. So, if we believe that any commonly bought stocks are overbought, we should buy VIXM. 

For our second hypothesis, we will simply buy SPY during normal market conditions (anytime the market is not overbought). I also want to pose a recent thought I had where many refer to the SNP (or S&P 500) as a representation of the overall market, whereas I've come to better understand it as a measure of how centralized wealth has become in the market into the top 500 companies. Not sure where this idea sits between radically wrong or a broken record, but just wanted to share since I hadn't heard it before. 

## Trading Platforms 

For backtesting, you can create your own trading platform or use one of the many publicly available options. Personally, my friend told me about [Composer](https://www.composer.trade), which which allows you to backtest your own strategy as well as view the community's strategies for free. It's a simple, no-code way to start. Here is what the strategy I outlined above looks like on Composer:

<div style={{ textAlign: 'center' }}>
  <img src="/assets/composer.png" alt="Composer Screenshot" style={{ width: '50%' }} />
</div>

## Editor's Note 


