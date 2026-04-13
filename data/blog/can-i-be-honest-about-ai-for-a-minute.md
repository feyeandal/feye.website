---
title: 'Can I Be Honest About AI for a Minute?'
date: '2026-04-13'
tags: ['ChatGPT', 'Claude', 'AI', 'disaster risk']
images: ['/static/images/AI-generated.jpg']
draft: false
summary: "I've spent the last few years quietly integrating AI into how I write, code, and map — and the more useful it becomes, the more I find myself asking what I'm at risk of losing. I don't have clean answers, but I'm trying to stay awake to the parts of this work that are still, stubbornly, human."
---

_I didn't set out to become someone who uses AI every day. It happened the way most shifts do — gradually, then all at once._

It started with sentences. Not writing in any sweeping sense, but the small, annoying friction of trying to make a sentence say exactly what I meant. I was drafting a paper and kept reading the same paragraph over and over, unable to identify what was wrong with it. A colleague suggested I try running it through an AI. I was skeptical. But I did, and something made sense — not because the AI fixed it, but because seeing an alternative version made me see what mine was missing. Clarity. That was the word. The argument was there; the clarity wasn't.

That was the first time I understood what this technology was actually for, at least for me. Not to replace thinking. To pressure-test it.

For a long time, the tool I reached for was ChatGPT. It was reliable in the way that familiar things are reliable — not perfect, but predictable. I used it to organize thoughts, troubleshoot code, and draft things I'd revise later. It became a habit the way a particular coffee order does: _you don't think about it, it just becomes part of how you start the day._

Then someone at work mentioned Claude. I tried it, and my first honest reaction was: I don't see the difference. _It was just another LLM_.

It wasn't. A colleague I trust from the community had mentioned Claude Code specifically — not as a recommendation exactly, more like a casual aside about what had been working for them. I only knew ChatGPT. I figured it would be more of the same. But I had a task in front of me: intersecting almost 100K grids with heavy-hazard maps. I already knew PostGIS could handle it. What I wanted was to move faster.

So I told Claude Code the problem and how I would have approached it myself. It implemented that approach. It didn't work at first because the dataset was too large, and the query was choking on it. So I asked what a better approach would be. It gave me one. That one worked.

It sounds simple when I write it out like that. But what stayed with me wasn't the result — it was the back-and-forth. It felt less like issuing commands and more like thinking out loud with someone who was actually following along. Someone is trying to understand what I _meant_, not just what I _said_.

_I became a little obsessed after that._

That feeling followed me into other parts of my work. In OpenStreetMap, the constraint has always been scale — how much you can process, validate, and act on before the window closes. AI _cannot_ solve that. But it changes what you can attempt. It shifts the edge of what feels feasible. I found myself trying things I wouldn't have tried before, not because I was more confident, but because the cost of being wrong had changed. Iteration got cheaper. The fear of wasting time on an idea that might not work got smaller.

And somewhere in that process, the tool stopped feeling like a shortcut and started feeling like a collaborator — one that had no patience for vague instructions and no memory between sessions, but was, in its own strange way, deeply responsive to precision. True enough, it was called _Agentic AI_ for a reason.

**But here is where I want to be careful.** Because it would be easy to write a blog post that sounds like I am just praising it, and that wouldn't be honest.

Some things genuinely worry me. The first is **data**. Every time I paste something into a prompt — a subset of data, a document, a description of a situation — I am deciding what leaves my hands. In disaster risk work, that is not a small thing. We handle sensitive information. We work with communities. Privacy is not an afterthought; it is a responsibility. And yet the tool's convenience makes it easy to move too fast, without stopping to ask: should this actually be going in here?

The second is **hallucination**. I went to an AI workshop in Bangkok last month, organized by OpenAI with regional partners, and the conversation that stayed with me was about exactly this. In disaster response settings, a wrong answer delivered with confidence is not an inconvenience. It is a failure with consequences. I work in a field where the quality of information can determine whether people are safe. That is not a context where "pretty good most of the time" is enough.

The third worry is one I did not expect: **dependency**. Claude Code was inaccessible for a stretch recently, and I noticed something uncomfortable in myself — a kind of low-grade panic about how much of my workflow had quietly reorganized around a tool I do not control. _What happens if it goes away? What happens if it changes in ways that no longer fit how I work?_ I had built a habit on a foundation I did not own, and for a few days, I felt the instability of that foundation.

I've talked about this with friends in the field — people doing similar work in GIS, and even my friends who are also developers. And we have similar dilemmas right now. If our bosses are too excited about AI, what does that mean for the people who used to do what AI now does faster? Nobody says it directly, but the question underneath every conversation is the same: _are we making ourselves redundant?_

The truth is, none of us really knows where this is going. The technology moves faster than any of us can keep up with, and I say that as someone whose job it is to pay attention. Every few months there's something new that changes what's possible, and the version of AI I'm writing about today will probably feel quaint in a year.

That's exciting and exhausting in equal measure.

What I keep coming back to, though — in those conversations with friends, in the quiet after a long day of work — is that the thing I'm most protective of isn't my job title or my skill set. It's something harder to name. The part that notices when a community is missing from a map and decides that matters. The part that sits with a family displaced by a flood and understands what the data can't capture. The part that asks _why_ before it asks _how_.

**I don't think AI has that.** Not yet. Maybe not ever — I genuinely don't know. But I do know that if we're not careful, we can quietly stop exercising it ourselves. And that worries me more than any headline about automation. So I keep using the tools. I keep moving fast, iterating, trying things. And I try to stay awake to the parts that are still, stubbornly, irreducibly human — and make sure I'm not taking those for granted.
