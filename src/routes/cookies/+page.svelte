<script lang="ts">
</script>

<svelte:head>
  <title>Cookie Policy</title>
</svelte:head>

<section class="bg-[#020f05] text-white py-32">

  <div class="max-w-4xl mx-auto px-6 md:px-20">

    <!-- HEADER -->
    <div class="mb-16">
      <h1 class="text-[40px] md:text-[64px] font-semibold leading-tight">
        Cookie Policy
      </h1>
      <p class="text-gray-400 mt-4 text-sm">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>

    <!-- CONTENT -->
    <div class="space-y-12 text-gray-300 leading-relaxed text-sm">

      <!-- INTRO -->
      <div>
        <h2 class="section-title">1. What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit a website.
          They help improve your experience, remember preferences, and analyze usage.
        </p>
      </div>

      <!-- HOW WE USE -->
      <div>
        <h2 class="section-title">2. How We Use Cookies</h2>
        <ul class="list-disc pl-5 space-y-2">
          <li>To ensure the website functions properly</li>
          <li>To remember your preferences</li>
          <li>To analyze website traffic and performance</li>
          <li>To improve user experience</li>
        </ul>
      </div>

      <!-- TYPES -->
      <div>
        <h2 class="section-title">3. Types of Cookies We Use</h2>

        <div class="space-y-6 mt-4">

          <div>
            <h3 class="sub-title">Essential Cookies</h3>
            <p>
              Necessary for the website to function. These cannot be disabled.
            </p>
          </div>

          <div>
            <h3 class="sub-title">Analytics Cookies</h3>
            <p>
              Help us understand how visitors interact with the site (e.g., pages visited, time spent).
            </p>
          </div>

          <div>
            <h3 class="sub-title">Functional Cookies</h3>
            <p>
              Remember your preferences and settings for a better experience.
            </p>
          </div>

          <div>
            <h3 class="sub-title">Marketing Cookies</h3>
            <p>
              Used to deliver relevant advertisements and track campaign performance.
            </p>
          </div>

        </div>
      </div>

      <!-- THIRD PARTY -->
      <div>
        <h2 class="section-title">4. Third-Party Cookies</h2>
        <p>
          We may use third-party services such as analytics tools or advertising platforms
          that place cookies on your device. These providers have their own privacy policies.
        </p>
      </div>

      <!-- CONTROL -->
      <div>
        <h2 class="section-title">5. Managing Cookies</h2>
        <p>
          You can control or disable cookies through your browser settings.
          However, disabling certain cookies may affect website functionality.
        </p>
      </div>

      <!-- CONSENT -->
      <div>
        <h2 class="section-title">6. Consent</h2>
        <p>
          By continuing to use our website, you consent to the use of cookies as described in this policy.
        </p>
      </div>

      <!-- CHANGES -->
      <div>
        <h2 class="section-title">7. Changes to This Policy</h2>
        <p>
          We may update this Cookie Policy from time to time. Updates will be posted on this page.
        </p>
      </div>

      <!-- CONTACT -->
      <div>
        <h2 class="section-title">8. Contact Us</h2>
        <p>
          If you have any questions about our use of cookies, contact us at:
        </p>
        <p class="mt-2 text-lime-400">
          info@apsrinfotech.com
        </p>
      </div>

    </div>

  </div>

</section>

<style>
  section {
    font-family: 'Inter', sans-serif;
  }

  .section-title {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #a3e635;
  }

  .sub-title {
    font-size: 14px;
    font-weight: 500;
    color: white;
    margin-bottom: 6px;
  }
</style>