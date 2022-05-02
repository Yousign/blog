---
tags: []
published: false
title: How we crushed our user testing in only 13 days
excerpt: 'User testing is an investment in time. You invest your time to test the
  design of your product. And you hope the investment will pay off by avoiding usability
  problems later. Your time is limited so invest it wisely. What should you test in
  priority? How many tests should you do? Should you do user tests at all? '
coverImage: https://ys-storage-public-blogtech-content-bucket.s3.eu-west-3.amazonaws.com/User_test.png
date: 2022-05-04T22:00:00Z
authors:
- _data/authors/Adrien Van Den Branden.md
- _data/authors/Alban Carmet.md

---
User testing is an investment in time. You invest your time to test the design of your product. And you hope the investment will pay off by avoiding usability problems later. Your time is limited so invest it wisely. What should you test in priority? How many tests should you do? Should you do user tests at all? Our insights below 👇

## Context: shipping our first product beyond eSignature

A bit of context first. In May 2021, we raised a [€30m Series A](https://yousign.com/blog/yousign-raises-30-million-euros) to move our product to the next phase. Yousign has thrived with its core eSignature product serving more than 10.000 customers to date. Yet we realised we could go beyond and offer more value to our customers up and down the contracting phase.

At the start of 2022 we formed a new product team called the Workflows squad. The mission of the squad: release and sell a new line of product called workflows. We formed the squad around the founders of Canyon, a contract automation tool [recently acquired](https://yousign.com/blog/yousign-acquires-canyon) by Yousign.

With workflows, we want to fix the broken contracting process. Today SMBs spend too much time preparing contracts. It takes hours to collect data, copy-paste it into Word documents and send contracts for signature. Patchy processes involving different tools and stakeholders cause many errors and frustration. Our workflows solution helps users automate many tasks in the contracting process, saving them a lot of time .

If you want to know more about our solution and get a sneak preview, simply join our waiting list.

<button data-tf-popup="KOeFbioi" data-tf-iframe-props="title=Workflows - EN - Simplified WL EXT" data-tf-medium="snippet" data-tf-hidden="source=bloguserresearch" style="all:unset;font-family:Helvetica,Arial,sans-serif;display:inline-block;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background-color:#5DE8C1;color:#000000;font-size:18px;border-radius:22px;padding:0 30px;font-weight:bold;height:45px;cursor:pointer;line-height:45px;text-align:center;margin:0;text-decoration:none;">Join the waiting list</button><script src="//embed.typeform.com/next/embed.js"></script>

## 6 months to build a brand new product line

Building a new line of product is ambitious. And we had to ship it fast. We got 6 months to design, deliver and sell the product. So we rolled up our sleeves and started working.

User tests are one of the many tools we use at Yousign in the discovery of a new product or feature. The discovery process tackles user, product, channel and rentability risks. In parallel, other members of the squad work on the specs, the naming, the positioning, the pricing, etc. User tests is a tool designed to mitigate product risk.

![](https://ys-storage-public-blogtech-content-bucket.s3.eu-west-3.amazonaws.com/Diagram.png)

In less than a month, we designed the screens of a first version of the solution. We went fast aided by the knowledge of the Canyon founders. Yet the design process prompted major concerns about the usability of the product. The main concerns revolved around the creation of a workflow.

Our workflows solution has two main flows: the creation flow and the execution flow. The creation (or setup) flow is the enabler. It allows users to create the automations that will help them save time. Once created, users can execute the workflow many times over. The execution flow brings up the value. Yet there’s no execution without creation. Users first have to create the workflow. Only then they can enjoy the value it brings.

We anticipated early on that the creation flow could cause usability problems. Creating a workflows involves many steps. Users first upload a template document. Then they link text fields to a form and add signature placeholders. Finally they configure signer and documents settings.

For Yousign, there's an extra difficulty: a majority of our customers are not tech-savvy. We sell mostly to traditional SMBs (real estate agencies, education institutions, architects, lawyers, etc.). Most of our users have little to no technical knowledge. Our challenge is to make our product accessible in a self-served manner. No training required means our user journey must be flawless.

## Only high-risk assumptions are worth testing

The first question we asked ourselves was: “do we need to do user tests?”. It can take weeks to book user interviews, run them and analyse the results. Do we have time for that? Can we afford it given our tight development schedule?

To help us out we listed the hypotheses we were making about our user journey. When making a product design you’re bound to make assumptions about how users will behave. Yet some assumptions are more risky than others.

For example, you can usually assume that users will complete a form and submit it when seeing one. Forms are a standard feature of web applications and are usually well-understood. Our workflows solution makes use of forms. We assumed that users would want to fill a form when they see one with empty fields. We didn't expect them to struggle understanding that. Hence we marked that assumption as low-risk in our user journey.

Here's an example of a high-risk assumption. We ask our users to configure their document template in Word and not inside the Yousign app. We assume that users understand they must work on their template in .docx format first. We also assume they will upload the template into the Yousign app after. That’s a high-risk hypothesis: if users fail to understand this, the whole user journey goes out of the window.

We ended up listing 22 assumptions in our user journey, 50% of which we marked as high-risk. It turned out we were making many high-risk assumptions in our design. Too many to be left untested.

## Look for every opportunity to save time

We were making many high-risk assumptions that needed to be tested. But how should we test them? Time is limited, so we tried to find ways to be as effective as possible.

For example, we decided to limit the tests to only our high-risk hypotheses. Reducing the scope is an easy way to save up time. Don’t fool yourself into thinking you need to test everything in your design. try to limit the number and breadth of scenarios to the minimum.

We considered reducing the interactivity level of our tests. You can test already a lot by showing a flat screen. This is especially true for dashboarding features. Preparing point-and-click prototypes is time-consuming. Yet sometimes they're necessary to test user flows. In our case, we could not avoid but designing point-and-click prototypes.

We booked no more than the minimum required user interviews. That number depends on the level of risk of the hypotheses you want to test. 5 user interviews should be enough for testing low-risk or medium-risk assumptions. Book 10 interviews if you have a high number of high-risk hypotheses to test. You should always book an extra interview to allow for no-shows.

We wanted to get users that could show up quickly for an interview. We also wanted those users to be engaged. That’s why we invited users directly from the product waiting list. Alternatively we could’ve drawn up from the list of users who already participated in user tests in the past. Recruiting motivated users takes time. So we recommend creating a small club of engaged users. After each interview, ask whether the user wants to join the club. They often will. You’ll be quicker to recruit users next time around.

We split our 10 user interviews in two rounds (5 each) with a few days between. This came in handy as it became clear from the first interviews that our design had shortcomings. We used the time buffer to improve our design based on the first round of feedback. We then ran the second round of interviews on an improved prototype.

## Start to code before tests are final

User tests should not halt the development process too long. Don’t wait for the final results of your user tests. Make an informed bet and start coding as soon as you’re ready.

For workflows, it took us 13 days to run 10 user interviews. Yet we started coding after the first week, before the end of the tests. The engineers got working as soon certain high-risk design assumptions were validated. Parallelising the work helped us win at least two weeks of development.

Remember that user testing is a time investment. You invest your time now to avoid usability problems later. Parallelise your work as much as possible to win the race around the clock.

To sum up:

* List the assumptions you’re making about the user journey
* Set a level of risk (high-medium-low) to each of your assumptions
* Perform user tests only if you have a decent number of high-risk assumptions
* Limit the scale of your tests as much as possible (flat screens instead of live prototypes, 5 interviews instead of 10)
* Start coding as soon as possible (don’t wait for the final results)

_We’ll discuss our best practices on how to conduct user tests in an upcoming blog article_

[**Adrien Van Den Branden**](https://www.linkedin.com/in/adrienvandenbranden/) **&** [**Alban Carmet**](https://www.linkedin.com/in/twitalban/)