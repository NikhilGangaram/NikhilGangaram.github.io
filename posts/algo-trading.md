---
title: "Algorithmic Trading"
date: "January 5, 2026"
---

## Disclaimer

This is in no way financial advice, I'm just an overly risk-seeking 21-year old who's okay with experimenting with his retirement money. Please please please do not take this as financial advice. 

## Introduction 

In late August, 2025, I became interested in the concept of algorithmic trading. While I'd heard of other friends becoming "quants" and earning ridiculous salaries, the field never interested me. I always related it to high-frequency trading, a specific niche where firms perform micro-transactions as a method to glean profits from the market. It was only after a friend introduced a much more measured form of algorithmic trading that I began to take interest. He gave me an hour-long walkthrough (which I will do my best to summarrize in this entry) of what it means to generate, backtest, and then deploy a strategy. 

## Strategies

I've come to define strategies as deployments of hypotheses that people believe will make money in the market. The most popular strategy in recent history has been to buy-and-hold a stable performer like the SNP for long enough to realize the benefits of compound interest. 

For me, this was always "enough" since I wasn't interested in hyper-optimizing my trading strategy. However, I've come to appreciate the idea that simple hypothesis can be powerful investmet strategies. For example, let's create a combined strategy with the two following governing hypothesis: 

* when stocks are overbought, the market will be more volatile as stocks settle to their average price
* under normal market conditions and with a long-term investment horizon, wealth will centralize in the market

While seemingly simple, I want to show that these hypothesis can be combined to perform much better than simply buying and holding a single stock. 

## Development

Now that we have these initial hypotheses, we need to develop and backtest a strategy. For the first hypothesis (commonly referred to as mean reversion), the intuition is similar to the biological concept of "homeostasis". When a stock is overbought, the market will tend to frantically buy and sell the stock as individual players attempt to gain profit. During this process, the value of the volatility (VIXY) will increase. So, if we believe that any commonly bought stocks are overbought, we should buy VIXY. In thise case, let's track SPY (S&P 500) and QQQ (Nasdaq 100) as our "commonly bought" stocks.

For our second hypothesis, I pose that as the wealth centralizes in the market, the top 500 companies will grow faster than the rest of the market. Thus, we will simply buy SPY during normal market conditions (anytime the market is not overbought). And that's it! This simple, rule-based logic is all we need to develop a strategy from our initial hypotheses. 

## Backtesting 

While we have a strategy, we have no idea how well it performs in the market. Backtesting is our way of deploying our strategy retroactively using historical data. For backtesting, you can create your own trading platform or use one of the many publicly available options. Personally, my friend told me about [Composer](https://www.composer.trade), which which allows you to backtest your own strategy as well as view the community's strategies for free. Here is what the strategy I outlined above looks like on Composer:

<div style={{ textAlign: 'center' }}>
  <img src="/assets/composer.png" alt="Composer Screenshot" style={{ width: '70%' }} />
</div>

And, when backtested, it looks like this with it's pretty graph and accompanying, informative tables (note that the green line is our strategy, the red line is the SPY performance over the same time period):

<div style={{ textAlign: 'center' }}>
  <img src="/assets/backtest_graph.png" alt="Composer Backtest Screenshot" style={{ width: '70%' }} />
</div>

The main values I look at are the annualized return, the max drawdown, and the Sharpe ratio,. The annualized return is the percentage of your investment that you'd expect to return over the course of a year. The max drawdown is the largest percentage loss you could experience over the backtesting period (in this case, back until January 4th, 2011). And the Sharpe ratio is a measure of risk-adjusted return. The goal is to maximize the annualized return and Sharpe ratio, while minimizing the max drawdown. In this case, our simple strategy acheives a annualized return of 31.3% when compared to the SPY's return of 14.0%, and a Sharpe ratio of 1.34 when compared to the SPY's Sharpe ratio of 0.85. The max drawdown between the strategies is comparable with teh SPY's max drawdown of 33.7% and ours of 33.3%. 

To drive the point home, $10,000 put into the SPY on January 4th, 2011 would have grown to $70,790.55. On the other hand, our strategy would have grown to $587,606.58 over the same period.

This is all to say that our strategy is as "stable" as the SPY, but with a much higher annualized return. So, if we're happy with our strategy and backtests, we can now move onto deployment. 

## Deployment 

When deploying, I hit many roadblocks that I've condensed into the following lists

What Worked: 
* yfinance for market data: platform-agnostic and easy to use 
* IBKR for manual trades: allows fractional orders and low settling times

What Didn't Work: 
* IBKR: didn't allow fractional orders through API 
* Schwab Trader API: didn't allow fractional orders through API
* Alpaca: no ROTH IRA for individual developers

There were many platform-specific headaches and in the end, the easiest system seems to simply be getting the correct trade to make from Composer, and then executing the trade manually through IBKR. I will be using this for the foreseeable future as there are other projects I want to get into and this 

## Lessons 

Decouple your systems. When I first started, I tried to request data and execute trades on the same platform (I started on Schwab Trader API), however, switching to using yfinance for market data gave me a platform-agnostic strategy module. This meant that I only needed to modify the trader module to execute trades through the chosen platform. 

Don't wait, it takes less time than you think. This is contradictory to Hofstadter's Law which states: "It always takes longer than you expect, even when you take into account Hofstadter's Law". I agree that the overall timeline usually takes longer, but the work itself is often less intimidating than just starting. In my case, it was probably a week's worth of intentional effort to prototype, backtest, and deploy a strategy (including all of the deployment headaches and experimentation). However, I kept bleeding time between the different parts of the process and it took be around 4 months instead.

## Lessons 

I'd like to end by noting that I didn't deploy the strategy that I outlined above. I had some fun with prototyping different strategies and I encourage you to do the same. When I said "intentional effort", I mean to spend a lot of time critically thinking and intently working on the problem, please do not lose months on a project that could have been done in days. 

Also, don't be afraid to make mistakes and experiment in as lean a way as possible. The amount of waiting I did for the perfect device which ended up not working or for the perfect 3 hour block of time to work on it were all just excuses. The faster you iterate (with whatever you have), the more failures you can learn from. It's such a simple rule, and I hope to get better at it over time. 