---
title: "NetGent: compile a browser task once, replay it forever"
order: 2
excerpt: "**NeurIPS 2025 · ML for Systems.** An agent framework that automates complex web workflows to generate realistic network traffic datasets."
header:
  teaser: fig-netgent-1.png
collection: portfolio
---

![NetGent runtime loop: program controller, state repository cache, state synthesis by the web agent, and state executor]({{ site.baseurl }}/images/fig-netgent-1.png)

Realistic network traffic datasets need real application workflows: logging in, streaming a video, searching a store. NetGent lets an agent explore a task once. The result compiles into a state machine, and later replays run without calling the model.

**My part:** I built the framework and validated it on 50+ workflows, cutting average workflow time by 57% with 50 concurrent Docker workers. Compiling once cuts the projected LLM cost of a million-run collection from $98,000 to under $10 a year.

[Paper (arXiv)](https://arxiv.org/abs/2509.00625) · [Code](https://github.com/EugeneVuong/netgent)
