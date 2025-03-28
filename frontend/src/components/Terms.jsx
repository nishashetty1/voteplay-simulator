import React from 'react'
import { motion } from 'framer-motion'
import { SEO } from '.'

const Terms = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  }

  return (
    <>
      <SEO
        title='VotePlay | Terms & Conditions'
        description="Terms and conditions for using VotePlay's Indian voting simulation platform."
        keywords='terms and conditions, legal terms, user agreement, voteplay terms'
        author='VotePlay'
        type='website'
      />
      <motion.div
        initial='hidden'
        animate='visible'
        variants={containerVariants}
        className='min-h-screen bg-gradient-to-b from-background-dark to-background-darker px-4 sm:px-6 lg:px-8 py-8'
      >
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dftncwphd/image/upload/v1741840248/background_kwjbeh.webp')] opacity-10 bg-center bg-contain" />

        <motion.div
          variants={itemVariants}
          className='max-w-4xl mx-auto bg-background-card p-8 rounded-2xl shadow-xl border border-secondary/10'
        >
          <h1 className='text-3xl font-sanskrit text-primary mb-6'>
            Terms & Conditions
          </h1>
          <p className='text-text-secondary text-sm mb-6'>
            Last updated on 25-01-2025 21:15:51
          </p>

          <div className='space-y-4 text-text-primary'>
            <p>
              These Terms and Conditions, along with privacy policy or other
              terms ("Terms") constitute a binding agreement by and between
              NISHA NAGRAJ SHETTY, ("Website Owner" or "we" or "us" or "our")
              and you ("you" or "your") and relate to your use of our website,
              goods (as applicable) or services (as applicable) (collectively,
              "Services").
            </p>

            <p>
              By using our website and availing the Services, you agree that you
              have read and accepted these Terms (including the Privacy Policy).
              We reserve the right to modify these Terms at any time and without
              assigning any reason. It is your responsibility to periodically
              review these Terms to stay informed of updates.
            </p>

            <p className='font-medium mt-6'>
              The use of this website or availing of our Services is subject to
              the following terms of use:
            </p>

            <ul className='list-disc pl-6 space-y-2'>
              <li>
                To access and use the Services, you agree to provide true,
                accurate and complete information to us during and after
                registration, and you shall be responsible for all acts done
                through the use of your registered account.
              </li>

              <li>
                Neither we nor any third parties provide any warranty or
                guarantee as to the accuracy, timeliness, performance,
                completeness or suitability of the information and materials
                offered on this website or through the Services, for any
                specific purpose. You acknowledge that such information and
                materials may contain inaccuracies or errors and we expressly
                exclude liability for any such inaccuracies or errors to the
                fullest extent permitted by law.
              </li>

              <li>
                Your use of our Services and the website is solely at your own
                risk and discretion. You are required to independently assess
                and ensure that the Services meet your requirements.
              </li>

              <li>
                The contents of the Website and the Services are proprietary to
                Us and you will not have any authority to claim any intellectual
                property rights, title, or interest in its contents.
              </li>

              <li>
                You acknowledge that unauthorized use of the Website or the
                Services may lead to action against you as per these Terms or
                applicable laws.
              </li>

              <li>
                You agree to pay us the charges associated with availing the
                Services.
              </li>

              <li>
                You agree not to use the website and/or Services for any purpose
                that is unlawful, illegal or forbidden by these Terms, or Indian
                or local laws that might apply to you.
              </li>

              <li>
                You agree and acknowledge that website and the Services may
                contain links to other third party websites. On accessing these
                links, you will be governed by the terms of use, privacy policy
                and such other policies of such third party websites.
              </li>
            </ul>

            <div className='space-y-4'>
              <p>
                You understand that upon initiating a transaction for availing
                the Services you are entering into a legally binding and
                enforceable contract with the us for the Services.
              </p>
              <p>
                You shall be entitled to claim a refund of the payment made by
                you in case we are not able to provide the Service. The
                timelines for such return and refund will be according to the
                specific Service you have availed or within the time period
                provided in our policies (as applicable). In case you do not
                raise a refund claim within the stipulated time, than this would
                make you ineligible for a refund.
              </p>
              <p>
                Notwithstanding anything contained in these Terms, the parties
                shall not be liable for any failure to perform an obligation
                under these Terms if performance is prevented or delayed by a
                force majeure event.
              </p>
            </div>

            <div className='space-y-4'>
              <p>
                These Terms and any dispute or claim relating to it, or its
                enforceability, shall be governed by and construed in accordance
                with the laws of India.
              </p>
              <p>
                All disputes arising out of or in connection with these Terms
                shall be subject to the exclusive jurisdiction of the courts in
                Mumbai, Maharashtra
              </p>
            </div>

            <div className='mt-6'>
              <p>
                All concerns or communications relating to these Terms must be
                communicated to us using the contact information provided on
                this website.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Terms
