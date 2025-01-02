type Portfolio = {
    title: string
    file: string
    rawContent: () => string
}

export default function getPortfolioData(portfolio: Portfolio) {
  return {
    slug: portfolio.file.split('/').pop().split('.').shift()
  };
}