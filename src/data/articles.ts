export type PublishedArticle = {
  title: string;
  url: string;
  platform: 'Hashnode' | 'Dev.to' | 'freeCodeCamp' | 'Reclear';
  category: string;
  date: string;
};

export const author = {
  name: 'Ilyas Rufai',
  siteUrl: 'https://blog.rufilboss.me/',
  hashnodeUrl: 'https://blog.rufilboss.me/',
  devToUrl: 'https://dev.to/rufilboss',
  freeCodeCampUrl: 'https://www.freecodecamp.org/news/author/rufilboss/',
  reclearUrl: 'https://reclear.io/blog/writers/rufilboss',
};

export const publishedArticles: PublishedArticle[] = [
  {
    title: 'How to Choose a KMS Key Strategy for SaaS Teams',
    url: 'https://dev.to/rufilboss/how-to-choose-a-kms-key-strategy-for-saas-teams-4p59',
    platform: 'Dev.to',
    category: 'Security',
    date: 'Aug 18, 2025',
  },
  {
    title: 'How to Build an Audit-Ready CloudTrail and Config Baseline',
    url: 'https://dev.to/rufilboss/how-to-build-an-audit-ready-cloudtrail-and-config-baseline-23a6',
    platform: 'Dev.to',
    category: 'AWS',
    date: 'Aug 12, 2025',
  },
  {
    title: 'How to Build a Three-Layer Artifact Integrity Pipeline for Container Releases',
    url: 'https://dev.to/rufilboss/how-to-build-a-three-layer-artifact-integrity-pipeline-for-container-releases-1fpf',
    platform: 'Dev.to',
    category: 'DevSecOps',
    date: 'Jul 29, 2025',
  },
  {
    title: 'What Is the Secrets Management Maturity Model for DevSecOps Teams?',
    url: 'https://dev.to/rufilboss/what-is-the-secrets-management-maturity-model-for-devsecops-teams-19l0',
    platform: 'Dev.to',
    category: 'Security',
    date: 'Jul 13, 2025',
  },
  {
    title: 'How to Build a Security Alert Router with n8n',
    url: 'https://dev.to/rufilboss/my-first-devsecops-automation-in-n8n-route-security-alerts-to-slack-27h',
    platform: 'Dev.to',
    category: 'Automation',
    date: 'Jun 28, 2025',
  },
  {
    title: 'How to Design IAM Roles for Multi-Account AWS Environments',
    url: 'https://dev.to/rufilboss/iam-role-design-patterns-for-multi-account-aws-environments-3eng',
    platform: 'Dev.to',
    category: 'AWS',
    date: 'Jun 24, 2025',
  },
  {
    title: 'Terraform EC2 and S3 Upload Access: A Simple IAM Role Setup Without Access Keys',
    url: 'https://dev.to/rufilboss/terraform-ec2-and-s3-upload-access-a-simple-iam-role-setup-without-access-keys-4k99',
    platform: 'Dev.to',
    category: 'Terraform',
    date: 'Jun 21, 2025',
  },
  {
    title: 'Secret Scanning in CI: What Pre-Commit, Pull Request, and Main Branch Each Actually Catch',
    url: 'https://dev.to/rufilboss/secret-scanning-in-ci-what-pre-commit-pull-request-and-main-branch-each-actually-catch-3c55',
    platform: 'Dev.to',
    category: 'CI/CD',
    date: 'Jun 17, 2025',
  },
  {
    title: 'How to Prevent Poisoned GitHub Actions Dependencies',
    url: 'https://www.freecodecamp.org/news/how-to-prevent-poisoned-github-actions-dependencies/',
    platform: 'freeCodeCamp',
    category: 'DevSecOps',
    date: '2025',
  },
  {
    title: 'How to Harden GitHub Actions Permissions with Least Privilege by Default',
    url: 'https://www.freecodecamp.org/news/how-to-harden-github-actions-permissions/',
    platform: 'freeCodeCamp',
    category: 'DevSecOps',
    date: '2025',
  },
  {
    title: 'Sign Container Images with Cosign in GitHub Actions',
    url: 'https://reclear.io/blog/sign-container-images-with-cosign-github-actions',
    platform: 'Reclear',
    category: 'CI/CD',
    date: 'Sep 12, 2026',
  },
  {
    title: 'Terraform Security Scanning in GitHub Actions',
    url: 'https://reclear.io/blog/terraform-security-scanning-github-actions',
    platform: 'Reclear',
    category: 'Security',
    date: 'Aug 22, 2026',
  },
  {
    title: 'How to Fix the "CrashLoopBackOff" Error in Kubernetes',
    url: 'https://reclear.io/blog/how-to-fix-crashloopbackoff-in-kubernetes',
    platform: 'Reclear',
    category: 'Kubernetes',
    date: 'Jul 11, 2026',
  },
  {
    title: 'Kubernetes ConfigMap vs Secret Explained',
    url: 'https://reclear.io/blog/kubernetes-configmap-vs-secret-explained',
    platform: 'Reclear',
    category: 'Kubernetes',
    date: 'Jul 10, 2026',
  },
  {
    title: 'Optimizing Serverless Applications with AWS Lambda and Amazon EventBridge',
    url: 'https://blog.rufilboss.me/optimizing-serverless-applications-with-aws-lambda-and-amazon-eventbridge',
    platform: 'Hashnode',
    category: 'Serverless',
    date: 'Jan 15, 2025',
  },
  {
    title: 'AWS Lambda: The Power of Serverless Computing',
    url: 'https://blog.rufilboss.me/aws-lambda-the-power-of-serverless-computing',
    platform: 'Hashnode',
    category: 'Serverless',
    date: 'Dec 25, 2024',
  },
  {
    title: 'How to Deploy a Static Website to AWS S3 Using GitHub Actions',
    url: 'https://blog.rufilboss.me/how-to-deploy-a-static-website-to-aws-s3-using-github-actions',
    platform: 'Hashnode',
    category: 'CI/CD',
    date: 'Jun 29, 2025',
  },
];
