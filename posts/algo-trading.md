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

## Expectations vs Reality

The goal was to have a single platform to handle the daily market data, account data, and order execution requests. In the case of using something like the Interactive Brokers (IBKR) API, the workflow would look something like this: 

* API makes a request to see what the current account position is 
* API makes a request to see what the relevant market data is for the chosen strategy
* The rule-based logic for the strategy is run to find the next desired position 
* If the next desired position is different than the current position
  * API makes a request to liquidate current position 
  * API makes a request to place a (usually fractional) order for the desired position 

And, I added the constraint that I'd like to do this trading in my ROTH IRA so I could trade tax-free. Simple, right? Sounds like there should be an existing solution for this, right? Well, think again. It seemed like no matter what popular solution I tried, I couldn't realize this system. 

I started with the Schwab Trader API which worked perfectly, except for the fact that I couldn't place fractional orders for the specific stocks my strategy traded. I then turned to Alpaca which Composer uses "under the hood", which also rejected my requests to trade since they don't yet support individual developer access to trade inside a ROTH IRA account. 

In all of this chaos, I chose to make the market data requests using the yfinance library as opposed to being dependent on the trading platform. Effectively, this was a "strategy.py" file that I backtested to ensure that it outputted the same results as Composer. This decoupling of the different parts of my trading bot allowed me to be relatively platform-agnostic as I continued searching for a provider to act as my "trader.py". 

I then turned to another popular option: IBKR. This seemed perfect, and I even got everything running on an old linux laptop that was configured with a cron job to run daily. And then, I learned that IBKR wouldn't allow me to make fractional orders for my stocks, a limitation that only exists through the API. But, this still allowed me to place fractional orders through their mobile interface. 

So, the final solution became a GitHub actions workflow that runs the strategy and sends me an email with the desired position. Then, I simply go to the IBKR app and execute the trade. While sub-optimal, this seemed to be a happy middle ground with getting something "deployed" while allowing me to move onto other projects. 

## Lessons 

Decouple your systems. Like I mentioned, switching to using yfinance for market data gave me a platform-agnostic strategy module. This meant that I only needed to modify the trader module to execute trades through the chosen platform, allowing me to experiment across providers faster. 

Don't wait, it takes less time than you think. This is contradictory to Hofstadter's Law which states: "It always takes longer than you expect, even when you take into account Hofstadter's Law". I agree that the overall timeline usually takes longer, but the work itself is often less intimidating than just starting. In my case, it was probably a week's worth of intentional effort to prototype, backtest, and deploy a strategy (including all of the deployment headaches and experimentation). However, I kept bleeding time between the different parts of the process and it took be around 4 months instead.

## Lessons 

I'd like to end by noting that I didn't deploy the strategy that I outlined above. I had some fun with prototyping different strategies and I encourage you to do the same. When I said "intentional effort", I meant to spend time critically thinking and intently working on the problem, not losing months telling yourself that you'll "get around to it later" when you could have finished it in a few intentional days. 

Also, prioritize making progress in as lean a way as possible. The less blocking factors in your way, like unessecarily setting up an ubuntu laptop or waiting for the perfect 3 hour block, the faster you can make mistakes and learn. I have a tedency to get lost in "what do I need" as opposed to "what can I do with what I have". The art of taking that first step forward is something I'm continually refining and I implore that you learn from my mistakes.