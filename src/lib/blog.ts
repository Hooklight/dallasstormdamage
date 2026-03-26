import { marked } from "marked";

export type BlogPost = {
  slug:            string;
  title:           string;
  metaTitle:       string;
  metaDescription: string;
  datePublished:   string;
  primaryKeyword:  string;
  contentHtml:     string;
  relatedLinks:    { href: string; label: string }[];
};

type BlogPostSource = Omit<BlogPost, "contentHtml"> & { markdown: string };

const posts: BlogPostSource[] = [
  {
    slug:            "hail-damage-what-to-do-dallas",
    title:           "Hail Just Hit Your House in Dallas. Here's What to Do Before You Call Anyone.",
    metaTitle:       "What to Do After Hail Damage in Dallas | First 24 Hours Guide",
    metaDescription: "Hail hit your Dallas home? Here's what to do in the first 24 hours — from documenting damage to avoiding scam contractors — before you call insurance or a roofer.",
    datePublished:   "2026-03-26",
    primaryKeyword:  "dallas hail damage what to do",
    relatedLinks: [
      { href: "/hail-damage-dallas",        label: "Hail Damage Dallas" },
      { href: "/storm-damage-inspection",   label: "Storm Damage Inspection" },
      { href: "/insurance-claim-help",      label: "Insurance Claim Help" },
      { href: "/first-24-hours-after-storm", label: "First 24 Hours After a Storm" },
    ],
    markdown: `
You hear it before you see it. That unmistakable sound of ice hitting your roof, your car, your windows. Then it stops, and you're standing in your living room wondering what just happened to your house.

If you're a homeowner in Dallas-Fort Worth, this isn't hypothetical. DFW is one of the most hail-prone metro areas in the country, and the storms that roll through between March and June can drop baseball-sized hail with almost no warning.

So what do you actually do after? Not the generic "call your insurance company" advice you'll find everywhere. The specific, step-by-step stuff that protects you from getting screwed over in the weeks that follow.

## Stay on the ground. Seriously.

Your first instinct might be to climb up on the roof and look. Don't. A damaged roof is an unstable roof, and you can't properly assess hail damage from up there anyway. A professional inspector needs to be on the roof — not you, not your neighbor, not your buddy who "used to do construction."

Walk your property from ground level instead. You're looking for the obvious stuff: dents in gutters and downspouts, cracked window screens, dings on your AC unit, marks on your fence or siding. This is actually more useful than you'd think. If your gutters look like someone took a ball-peen hammer to them, your roof caught the same hail. Insurance adjusters know this.

## Document everything. Then document it again.

This is where most people lose money. Not because insurance denies their claim, but because they didn't have enough evidence to get the full payout.

Here's what to photograph:

- Wide shots of each side of your house, your roof (from the ground), your yard, your driveway
- Close-ups of every dent, crack, or mark you find — on gutters, siding, window frames, screens, the AC condenser, patio furniture, your car
- Hailstones on the ground, ideally next to a coin or ruler for scale. If you can grab a few and toss them in the freezer, even better.
- Any water coming in. Check your attic, ceilings, and around windows.

Take notes about the storm itself: what time it started, how long it lasted, what direction it came from. Your phone's weather app and timestamped photos do most of this automatically, but write it down anyway.

## Don't throw anything away yet

Broken screen? Cracked vent cover? That piece of siding that got knocked loose? Leave it all where it is until your insurance adjuster has seen it. Moving or discarding damaged materials before the inspection can weaken your claim.

If something is a safety hazard — a broken window, a dangling gutter — make the minimum repair needed to prevent further damage. Cover the broken window with plastic. Secure the gutter so it doesn't fall on someone. Take photos before and after you make any temporary fix.

## Be careful who knocks on your door

Within hours of a major hailstorm in Dallas, trucks with out-of-state plates will start showing up in your neighborhood. Storm chasers. They'll knock on your door, tell you your roof is destroyed, and offer to handle everything — including your insurance claim — if you just sign right here.

Some of these companies do fine work. Many don't. And the ones who pressure you to sign something the same day the storm hits are the ones to be most cautious about.

A few things to watch for:

- Anyone who offers to pay or waive your insurance deductible. That's illegal in Texas.
- Contractors who want you to sign an "assignment of benefits" before you've even talked to your insurance company.
- Companies with no local address, no Texas license, and no verifiable references in DFW.

There's no rush to pick a contractor. You have time. Take it.

## Call your insurance company, but know your numbers first

Before you file the claim, pull up your policy and check two things: your deductible (specifically your wind/hail deductible, which in Texas is often a percentage of your home's insured value rather than a flat dollar amount) and your filing deadline (most Texas policies require claims within one year, but check yours).

When you call, stick to the facts. "We had a hailstorm on [date]. I've documented damage to [list what you found]. I'd like to file a claim and schedule an adjuster visit."

Don't let anyone — not a contractor, not a "public adjuster" who showed up uninvited — file the claim for you. You file it. You control it.

## Get a professional inspection before the adjuster shows up

Ideally, you want an independent inspection from a reputable local company before the insurance adjuster arrives. This gives you a baseline: you'll know what's actually damaged, what it should cost to fix, and whether the adjuster's assessment is fair.

When the adjuster does come, be there. Walk the property with them. Point out everything you documented. If you have an inspector or roofer you trust, ask them to be present too. An experienced local professional can spot things an adjuster might miss — or might not look for.

## The first 24 hours matter more than you think

Insurance companies process thousands of claims after a major hailstorm. The homeowners who get the best outcomes are the ones who document thoroughly, file promptly, and don't sign anything under pressure.

Take the photos. Make the notes. Call your insurance. Get a professional opinion. And don't let anyone rush you into a decision you're not comfortable with.

If you're in Dallas-Fort Worth and you're not sure where to start, we help homeowners figure out what's actually going on with their property after a storm — no sales pitch, no pressure. We're not contractors. We just help you get the facts so you can make the right call.
`,
  },
  {
    slug:            "storm-damage-insurance-claim-texas",
    title:           "How to File a Roof Insurance Claim After Storm Damage in Texas (Without Getting Lowballed)",
    metaTitle:       "Storm Damage Insurance Claim Texas | How to File & What to Expect",
    metaDescription: "Filing a storm damage insurance claim in Texas? Here's how the process actually works, what your adjuster is looking for, and how to avoid getting underpaid.",
    datePublished:   "2026-03-26",
    primaryKeyword:  "storm damage insurance claim texas",
    relatedLinks: [
      { href: "/insurance-claim-help",    label: "Insurance Documentation Help" },
      { href: "/storm-damage-inspection", label: "Storm Damage Inspection" },
      { href: "/how-it-works",            label: "How It Works" },
      { href: "/hail-damage-dallas",      label: "Hail Damage Dallas" },
    ],
    markdown: `
Your roof took a hit. You called your insurance company. They're sending an adjuster. Now what?

This is the part where a lot of Dallas-Fort Worth homeowners lose money — not because their claim gets denied, but because they don't know what to expect from the process, and they end up accepting a payout that doesn't cover the actual cost of repairs.

Here's how the storm damage claim process works in Texas, and what you can do to make sure you come out of it fairly.

## How the process works (the short version)

You report damage. Insurance sends an adjuster. The adjuster inspects your property, writes up an estimate, and your insurance company sends you a check based on that estimate, minus your deductible.

Simple enough on paper. In practice, there are a few places where things go sideways.

## Know your deductible before you file

In Texas, your wind and hail deductible is usually separate from your standard deductible. And it's often a percentage — typically 1% or 2% of your home's insured value — rather than a flat amount.

So if your home is insured for $350,000 and you have a 2% wind/hail deductible, you're paying $7,000 out of pocket before insurance covers anything. That's a number worth knowing before you file, because if your damage is minor, it might not meet that threshold.

On the other hand, if a major hailstorm came through and your whole roof needs replacing, that $7,000 deductible against a $15,000–$25,000 roof replacement is still very much worth filing for.

## The adjuster visit is the most important part

When the insurance adjuster comes to your property, they're going to spend somewhere between 30 minutes and a couple hours assessing damage. This single visit largely determines how much money you get.

A few things that will help you here:

**Be present.** Don't just hand them the keys and leave. Walk the property with them. Point out everything you documented after the storm.

**Have your own inspection done first.** If a reputable local inspector has already assessed your roof, you'll have an independent estimate to compare against the adjuster's. If the numbers are wildly different, that's a conversation worth having.

**Ask your inspector or roofer to be there.** A good roofer who knows what hail damage looks like on your specific type of roof can point out things the adjuster might overlook. This isn't adversarial — adjusters handle hundreds of claims and sometimes things get missed. Having an extra set of knowledgeable eyes helps.

**Point out the collateral damage.** If your gutters are dented, your AC unit has dings, your fence is marked up, and your window screens are torn — that's all evidence of the same hailstorm that hit your roof. Adjusters look for consistent patterns. The more supporting evidence, the stronger your claim.

## What to do if the estimate seems low

It happens. The adjuster's estimate comes back and it doesn't cover what your contractor quoted for repairs. Before you panic, understand that a first estimate isn't necessarily final.

You have a few options in Texas:

**Request a re-inspection.** If you believe the adjuster missed damage, you can ask your insurance company to send someone out again. Having a detailed report from your own inspector makes this request much stronger.

**Invoke the appraisal clause.** Most Texas homeowners policies include an appraisal clause. If you and your insurer can't agree on the amount of loss, either side can demand an appraisal. Each side picks an appraiser, those two pick an umpire, and the panel determines the payout. It's not a lawsuit — it's a process built into your policy.

**Talk to the Texas Department of Insurance.** TDI has a consumer helpline and complaint process. If you think your insurer is acting in bad faith, this is the state agency that oversees them.

What you probably don't need (at least not right away) is a public adjuster or an attorney. Those options exist for genuine disputes, but for most straightforward hail claims in DFW, good documentation and a willingness to push back are usually enough.

## The contractor question

At some point, you need to pick someone to actually do the repairs. A few ground rules for Texas:

**Anyone who offers to cover your deductible is breaking the law.** Texas Insurance Code Section 707.002 makes it illegal for a contractor to pay, waive, or rebate your deductible. If someone offers this, walk away.

**Get at least two or three quotes.** Compare them against the insurance estimate. Your insurance company has to pay for the damage, but you get to choose who does the work.

**Check licenses and insurance.** Texas doesn't have a statewide roofing license, but many DFW cities require local permits and registrations. Verify them. Ask for proof of liability insurance and workers' comp. Get references from jobs they've done in your area — not just anywhere, but in your part of DFW.

## Your timeline matters

Most Texas homeowners insurance policies require you to file a claim within one year of the damage. Some policies are tighter. Don't wait until month 11 to start the process.

That said, don't rush either. A claim filed with good documentation two weeks after the storm is worth much more than a panicked call the day of with no photos and no inspection.

## The bottom line

Filing a storm damage claim in Texas isn't complicated, but it rewards preparation. Document your damage thoroughly. Know your deductible. Be present for the adjuster. Get an independent assessment. And don't let anyone — your insurance company, a contractor, or a stranger who knocked on your door — rush you into something that doesn't feel right.

If you're in the Dallas-Fort Worth area and want help understanding what's going on with your property after a storm, that's what we do. We help you document damage, understand the process, and connect with professionals who will treat you fairly. No contractor pitch. No insurance runaround. Just straight answers.
`,
  },
];

let _cache: BlogPost[] | null = null;

export function getAllBlogPosts(): BlogPost[] {
  if (_cache) return _cache;
  _cache = posts.map((p) => ({
    slug:            p.slug,
    title:           p.title,
    metaTitle:       p.metaTitle,
    metaDescription: p.metaDescription,
    datePublished:   p.datePublished,
    primaryKeyword:  p.primaryKeyword,
    relatedLinks:    p.relatedLinks,
    contentHtml:     marked.parse(p.markdown.trim()) as string,
  }));
  return _cache;
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return getAllBlogPosts().find((p) => p.slug === slug);
}
