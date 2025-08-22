---
title: "Robotics' Bottleneck"
excerpt: "What I believe is holding robotics back."
category: "experiences"
---
# Robotics Thoughts

## Parralels to the AI Boom 

Robotics now is where I believe AI was around 10 years ago. Sparse collections of research labs and a few well-funded early copmanies all incrementally building towards varied definitions of "intelligence". Fast-forwarding to today, it's clear that the field has made monumental progress; the real question is "how". 

Beyond the individual brilliance of researchers like Karpathy, Brown, Hinton, and Hassabis (just to name a few), my belief is that the consolidation of AI frameworks onto PyTorch was the main accelerator for progress. While I'm much too young to claim that I knew what AI was pre-PyTorch, it seems like a logical conclusion that a unifying library would be necessary in focusing research efforts. Instead of researchers wasting time on working out low-level bugs, they could narrow their sights on architectural improvements; also, previous results became trivially reproducible and extensible for continued research. 

I believe PyTorch did this by building from the basics. Everything (from tensors all the way to out-of-the-box networks) is native to the PyTorch library. The base units (tensors) were built properly in the "back-end" which could then be extended to their currnet, more user-friendly "front-end". This enabled rapid prototyping while also giving the ability to make low level optimizations for applied / real-time settings. Furthermore, PyTorch has always enabled and supported the SOTA; from the PyTorch Geometric library powering majority of GNN research to the prompt release of "mps" support for mac silicon users to utilize their GPU to the immediate support of the ADAM optimizer when it was released. 

Beyond these anecdotal examples, this comes from my fundamental belief that progress is not idea-constrained, it is currently constrained by the lack of our ability to enable people to bring their ideas to life. I like to think of the rate of progress being the expected value of the number of ideas we have as well as the probability of bringing these ideas of life. I'll write something at some point about what I believe about the education problem (and how I believe it is implicitly a culture problem), but for now, I believe robotics' main bottleneck is the ability to bring new ideas to life quickly on a platform that snowballs progress. 

## What about ROS? 

The first question that jumps into any roboticist's head is "what about ROS"? For the uninitiated, ROS is a open-source library built in the early 2000's, and has since expanded to dozens of versions and thousands of individual contributing libraries which encompass everything from fundamental nagivation libraries to SOTA computer vision pipelines. So, this sounds perfect, problem solved right? 

Not exactly, the ROS framework feels fragile when prototyping and misleading when attempting to reproduce results, the plethora of different versions become a headache when starting out, and the scattered custom autonomy stacks built by companies and labs (which admittedly have some ROS-native components) all point to existing issues with the framework when deploying live hardware. 

## So, what does it look like? 

While I don't have the perfect answer, here are some attribute I believe a foundational robotics platform should have:

* **Development-Hardware Agnostic** - The platform should be able to run on Windows/Linux/Mac, and allow for easy deployment to hardware platforms of varying capabilities.
* **Visual and Deterministic Debugging** - The platform should provide a visual debugger and deterministic replay tools to help developers debug behavior.
* **Language Agnostic** - The platform should be able to support multiple languages, including Python, C++, and JavaScript. Different languages are used/good for different purposes, and there should be a way to bridge the gap between them.
* **Task-Graph-Based** - This is a more technical remark, but I believe the platform should be task-graph based. Specifically, compute nodes should be treated as tasks and constructed together in a graph form. The intuition being that many low-level computer architecture has already solved many of the problems around task scheduling, and the graph form should make it easier to reason about the system (both from a learned and human perspective).
* **Modular** - The platform should be modular, allowing for easy extension and customization. This is what PyTorch got right, and I think a robotics platform should similarly be built from modular components.
* **Pub/Sub/Hub** - When starting, I found the decentralized architecture of pub/sub to be convoluted. While there are clear benefits of a decentralized architecture (like fault isolation for exampple), I think it's much more natural to think of a robot as a single entity. 
* **Good Code** - I know this sounds stupid, but I'd like to emphasize that the platform should work out of the box, have lean (and non-conflicting) dependencies, be extensible and readable, and have all of the other attributes that comprise a good codebase.
* **Open-Source** - Building off the rest of the points, the platform should be open-source. This problem won't be solved by a single entity, and I think the future of robotics looks like an open-source ecosystem. The closest example of this is Raycast, where there is a unifying bridge that users can build open-source extensions on top of. In the robotics example, I envision something where a VLA from Physical Intelligence can command a humanoid from Unitree to communicate with a Google Home node to turn your smart lights on/off (kind of a convoluted example, but I hope the idea is clear). 

## Editor's Note 

You may be wondering why this post is under "experiences" as opposed to "thoughts". That's because I actually had the chance to try my hand at solving this issue while at Cerulion. Working there gave me the chance to think critically about the field and has greatly influenced my beliefs on how this problem should be approached. Super grateful to have gotten to work there and I wish them the best with their launch! 