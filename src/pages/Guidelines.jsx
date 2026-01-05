import { Link } from 'react-router-dom'
import './Guidelines.css'

export default function Guidelines() {
  return (
    <div className="guidelines-container">
      <header className="guidelines-header">
        <Link to="/home" className="back-button">
          ← Back
        </Link>
        <h1>Community Guidelines</h1>
      </header>

      <main className="guidelines-main">
        <div className="guidelines-content">
          <section className="guideline-section">
            <h2>🤝 Be Respectful</h2>
            <p>
              Treat all neighbors with kindness and respect. We're all here to build a 
              stronger, more connected community. Disagreements are natural, but personal 
              attacks, harassment, or discrimination of any kind will not be tolerated.
            </p>
          </section>

          <section className="guideline-section">
            <h2>🏘️ Keep It Local</h2>
            <p>
              This is a neighborhood chat for local connections. Keep conversations relevant 
              to your community, local events, recommendations, and neighbor-to-neighbor 
              interactions.
            </p>
          </section>

          <section className="guideline-section">
            <h2>🔒 Protect Privacy</h2>
            <p>
              Don't share personal information about others without their consent. This 
              includes addresses, phone numbers, or other private details. Respect your 
              neighbors' privacy as you would want yours respected.
            </p>
          </section>

          <section className="guideline-section">
            <h2>💬 Stay On Topic</h2>
            <p>
              Each chat room has a specific purpose. Please use the appropriate room for 
              your conversation. This helps everyone find the discussions they're interested 
              in more easily.
            </p>
          </section>

          <section className="guideline-section">
            <h2>🚫 No Spam or Solicitation</h2>
            <p>
              Don't use OurNeighbors for commercial advertising, spam, or excessive self-promotion. 
              Occasional recommendations for local businesses are fine, but repeated promotional 
              posts are not allowed.
            </p>
          </section>

          <section className="guideline-section">
            <h2>⚖️ Follow the Law</h2>
            <p>
              Don't post anything illegal or that encourages illegal activity. This includes 
              threats, harassment, hate speech, or any content that violates local, state, 
              or federal laws.
            </p>
          </section>

          <section className="guideline-section">
            <h2>🛡️ Report Issues</h2>
            <p>
              If you see something that violates these guidelines, please report it. Use the 
              three-dot menu on any message to report inappropriate content or block users 
              whose messages you don't want to see.
            </p>
          </section>

          <section className="guideline-section">
            <h2>🌈 Inclusive Community</h2>
            <p>
              OurNeighbors is for everyone. We celebrate diversity and expect all members to 
              be welcoming to neighbors of all backgrounds, identities, and beliefs. 
              Discrimination, bigotry, and hate speech have no place here.
            </p>
          </section>

          <section className="guideline-section">
            <h2>⚠️ Consequences</h2>
            <p>
              Violations of these guidelines may result in warnings, temporary suspension, 
              or permanent removal from the platform, depending on the severity and frequency 
              of violations.
            </p>
          </section>

          <div className="guidelines-footer-content">
            <h3>Questions or Concerns?</h3>
            <p>
              If you have questions about these guidelines or need to report a serious issue, 
              please contact us at <a href="mailto:support@ourneighbors.app" className="link">
              support@ourneighbors.app</a>
            </p>
            <p className="last-updated">Last updated: January 2026</p>
          </div>
        </div>
      </main>
    </div>
  )
}

