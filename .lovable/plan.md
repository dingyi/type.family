

# Scrape Missing Foundry Descriptions

## Overview

There are approximately 60-70 foundry entries without descriptions. We'll scrape each foundry's website to extract a short description and update the data file.

## Approach

Since there are ~70 websites to scrape, we have two options:

### Option A: Use Firecrawl (Recommended for automation)
- Connect the Firecrawl service to the project
- Create an edge function that batch-scrapes all foundry websites missing descriptions
- Extract meta descriptions or page summaries
- Update the foundries data with the results

### Option B: Manual batch fetch (No external service needed)
- I'll use my built-in website fetching tool to visit each foundry site one by one
- Extract the meta description or first paragraph from each site
- Manually update `src/data/foundries.ts` with the scraped descriptions

**I recommend Option B** since it requires no setup and you won't need to connect any external services. I'll batch through the ~70 sites, extract descriptions, and update the data file directly.

## Steps

1. **Identify all entries missing descriptions** from `src/data/foundries.ts` (~70 entries)
2. **Fetch each website** using the built-in fetch tool to get meta descriptions or page content
3. **Extract a short Chinese description** (or translate English descriptions) for each foundry
4. **Update `src/data/foundries.ts`** with all the new descriptions in one batch edit

## Technical Details

- Entries without `description` field are concentrated in IDs 55-124 (the "studio" category)
- Some entries have English descriptions that could be translated/improved to Chinese
- Each description will be kept concise (under 30 characters in Chinese) to match the existing style
- Where possible, we'll also extract `country` and `founded` year if available on the site

## Notes

- Some websites may be unreachable or have limited content -- those will get a generic description based on the foundry name
- This will take multiple fetches but the end result is a single file update

