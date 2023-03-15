import { Container, Link, Toolbar, Typography } from '@mui/material'
import React, { ReactNode } from 'react'
import BlankLayoutWithAppBar from 'src/@core/layouts/BlankLayoutWithAppBar'
import Footer from 'src/views/landing/Footer'

export default function PrivacyPolicy() {
  return (
    <div
      style={{
        background: '#f3f3f3',
        minHeight: '100vh',
        height: '100%',
        fontFamily:
          'Inter,sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
      }}
    >
      <Container>
        <Toolbar />
        <Typography variant='h4' sx={{ my: 8, fontWeight: 'bold', textAlign: 'center' }}>
          Landlords Rescue Limited: Privacy Policy
        </Typography>
        <p>
          This is the privacy statement for Landlords Rescue Limited (<b>Landlords Rescue</b> or <b>We</b>). Landlords
          Rescue is a private company (company number 14262157) with its registered office at Fullford House, Newbold
          Terrace, Royal Leamington Spa, Warwickshire CV32 4EA
        </p>
        <p>
          For the purpose of the Data Protection Act 2018 and the General Data Protection Regulation 2016/679 the data
          controller is Landlords Rescue trading style of Landlordsrescue.com Limited. Landlords Rescue is registered at
          the ICO with number 
          <b>
            <a
              href='https://llr-pdf.s3.eu-west-2.amazonaws.com/Registration+Certificate+-+ZB412425.pdf'
              rel='noreferrer'
              target='_blank'
            >
              (ZB412425)
            </a>
          </b>
          .
        </p>
        <p>
          Landlords Rescue is committed to protecting and respecting your privacy. This policy sets out the basis on
          which any personal data We collect from you or that you provide to us, directly or indirectly, will be
          processed by us. Please read the following carefully to understand our views and practices regarding personal
          data and how We treat it.
        </p>
        <p>Landlords Rescue's Data Protection Officer can be contacted at dpo@landlordsrescue.com.</p>
        <p>The General Data Protection Regulation 2016/679</p>
        <p>
          In this statement We have used certain terms which are set out in the General Data Protection Regulation
          2016/679 (<b>GDPR</b> or <b>the Regulation</b>):
        </p>
        <ul>
          <li>
            personal data means: any information relating to an identified or identifiable natural person (data
            subject); an identifiable natural person is one who can be identified, directly or indirectly, in particular
            by reference to an identifier such as a name, an identification number, location data, an online identifier
            or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or
            social identity of that natural person.
          </li>
          <li>
            controller means: the natural or legal person, public authority, agency or other body which, alone or
            jointly with others, determines the purposes and means of the processing of personal data.
          </li>
          <li>
            processor means: a natural or legal person, public authority, agency or other body which processes personal
            data on behalf of the controller.
          </li>
          <li>
            processing means: any operation or set of operations which is performed on personal data or on sets of
            personal data, whether or not by automated means, such as collection, recording, organisation, structuring,
            storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination
            or otherwise making available, alignment or combination, restriction, erasure or destruction
          </li>
        </ul>

        <section>
          <Typography variant='h5' sx={{ my: 8, fontWeight: 'bold' }}>
            What We Do
          </Typography>
          <p>A toolkit of products and insurances is offered by Landlords Rescue.</p>
          <p>
            Landlords Rescue assists property owners and landlords (collectively, Landlords (being either actual or
            prospective Landlords)) in establishing tenancies; and provides a variety of additional services relating to
            insurance products for the landlord's protection.
          </p>
          <p>
            Landlords Rescue assists landlords and actual tenants (collectively, Tenants (which for the purposes of this
            privacy statement, shall be deemed to include any individual guarantors of any Tenant)) in establishing
            tenancies; and provides a variety of other services relating to cover protection for Landlords.
          </p>
          <p>For purposes of this Privacy Policy, Landlords and Tenants are collectively referred to as Users.</p>
        </section>
        <section>
          <Typography variant='h5' sx={{ my: 8, fontWeight: 'bold' }}>
            Our Status Under GDPR
          </Typography>
          <p>
            Depending on the nature of the interaction, We may act as a processor when We provide our services to our
            Users and as a controller when We determine the purposes and means of the processing of personal data, such
            as when We process the personal data of our employees.
          </p>
        </section>
        <section>
          <Typography variant='h5' sx={{ my: 8, fontWeight: 'bold' }}>
            What Legal Justifications Do We Use To Process Personal Information?
          </Typography>
          <p>
            The lawful bases for Landlords Rescue's processing of personal data are outlined in Article 6 of the
            Regulation. With respect to Landlords Rescue's business model, our processing is lawful because at least one
            of the following applies:
          </p>
          <ul>
            <li>
              the data subject has consented to the processing of his or her personal information for one or more
              specified purposes (Consent).
            </li>
            <li>
              the processing is necessary for the performance of a contract to which the data subject is a party or for
              taking steps, at the data subject's request, prior to entering into a contract (Contract Performance).
            </li>
            <li>
              processing is required to comply with a legal obligation to which we are subject (Legal Obligations).
            </li>
            <li>
              the processing is necessary for the purposes of Landlords Rescue's legitimate interests, except where our
              interests are overridden by the interests or fundamental rights and freedoms of the data subject which
              require protection of personal data, in particular where the data subject is a child; and (Legitimate
              Interest).
            </li>
          </ul>
        </section>
        <section>
          <Typography variant='h5' sx={{ my: 8, fontWeight: 'bold' }}>
            Consent
          </Typography>
          <p>
            Where We process personal data based on the consent of the data subject, We ensure that consent is freely
            given, specific, informed, and manifested through a clear affirmative act. We have outlined (below) how this
            can be accomplished when consent is withdrawn.
          </p>
        </section>
        <section>
          <Typography variant='h5' sx={{ my: 8, fontWeight: 'bold' }}>
            Contract Execution
          </Typography>
          <p>
            Whenever We enter into a contract, it may be necessary to process personal data in order to carry out the
            contract or take pre-contractual measures.
          </p>
        </section>
        <section>
          <Typography variant='h5' sx={{ my: 8, fontWeight: 'bold' }}>
            Legal Obligations
          </Typography>
          <p>
            In cases where Landlords Rescue is subject to legal obligations, the processing of personal data may be
            required by law.
          </p>
        </section>
        <section>
          <Typography variant='h5' sx={{ my: 8, fontWeight: 'bold' }}>
            Legitimate Interest
          </Typography>
          <p>
            When We process personal data as necessary for the purposes of our legitimate interests, We do so based on a
            careful weighing of our legitimate interests against the rights and freedoms of the data subject that must
            be protected.
          </p>
          <p>
            Presently, We have determined that the manner in which We manage the processing of personal data results in
            an accumulation of data subject protections indicating that Landlords Rescue can rely on Article 6.1(f) of
            the Regulation as a legal basis for processing personal data.
          </p>
        </section>
        <section>
          <Typography variant='h5' sx={{ my: 8, fontWeight: 'bold' }}>
            Sensitive Individual Data
          </Typography>
          <p>
            Where Landlords Rescue processes sensitive personal data on behalf of a User, it does so on the basis that
            the User has established a lawful exception to the prohibition on processing sensitive personal data under
            Article 9 of the Regulation; and where Landlords Rescue is processing sensitive personal data of employees,
            it does so pursuant to its employment relationship with its employees, and therefore relies on the exception
            set forth in paragraph 2(b) of Article 9 of the Regulation.
          </p>
        </section>
        <section>
          <Typography variant='h5' sx={{ my: 8, fontWeight: 'bold' }}>
            Overview Of Landlords Rescue's Use Of Personal Information
          </Typography>
          <p>
            The manner in which Landlords Rescue collects and uses personal data varies based on the nature of its
            interaction with the individual whose data it is processing. Depending on the nature of the services We
            provide, for instance, the personal information provided by a prospective Tenant when registering on the
            Landlords Rescue website may be used for multiple purposes and in a variety of capacities. Where Landlords
            Rescue's employment of a worker necessitates the processing of the worker's personal information, we have
            also outlined how this will be carried out. As a result, We have explained how personal data may be
            processed when used within our organisation and in the context of the services we provide during our
            commercial life-cycle, i.e. in the context of the services We provide Landlords and Tenants, respectively.
            In addition, We have mentioned other services that require the processing of personal data as well as the
            manner in which We process the personal data of third parties. Our general objective is to inform by being
            transparent, in accordance with the requirements of the Regulation.
          </p>
        </section>
        <section>
          <Typography variant='h5' sx={{ my: 8, fontWeight: 'bold' }}>
            Landlords
          </Typography>
          <p>
            Landlords interested in learning more about Landlords Rescue's services can enter their information on our
            website at https://www.Landlords Rescue.com or any landing pages hosted at https://www.Landlords Rescue.com/
            or via an enquiry form; or they can email or call us directly using contact details provided on our website
            or elsewhere. This is likely for the purposes of entering into a relationship with Landlords Rescue by
            accepting our terms and conditions, requesting that We contact them, reading or downloading information, or
            requesting our support. Occasionally, we may also meet business-relevant connections at events or use social
            media platforms to research individuals. When these individuals are contacted (or when they contact us) in
            their capacity as employees of their organisation, the interaction will be considered a business-to-business
            transaction.
          </p>
          <p>
            Personal information collected may include the landlord's name, phone number, home address, email address,
            place of employment, IP address from the device being used, online identifiers, property and
            property-related information, and location data. We will not intentionally gather sensitive personal
            information. We may collect and process information about a Landlord's website usage (such as browsing
            history and information about their navigation through our website) when they visit our website using
            cookies and other similar technologies. We may process information regarding interactions with us during
            communications.
          </p>
          <p>
            Who controls the personal data: When a Landlord enters into an agreement with Landlords Rescue and Landlords
            Rescue provides services to the Landlord (by agreeing to Landlords Rescue's terms and conditions), the
            Landlord controls the purposes of the processing of personal data under the agreement and is a controller.
          </p>
          <p>
            Who processes the personal data: Landlords Rescue is a processor when acting on the instructions of the
            Landlord pursuant to the terms of their agreement. In addition, Landlords Rescue, our website, email, CRM,
            and marketing platform providers, as well as third-party contractors, process Landlord personal data on our
            behalf. This is carried out in accordance with the Regulation and ePrivacy Directive.
          </p>
          <p>
            Where personal information is stored and how it is used: We store landlords' personal information in our
            databases for the primary purpose of delivering our services. It may also be used to send you news and
            updates about our services, to implement and improve our services, including format and content, to
            administer our website and for internal operations, including troubleshooting, data analysis, testing,
            research, statistical, and survey purposes, as part of our efforts to keep our website safe and secure, to
            measure or understand the effectiveness of any advertising We serve you or others, and to deliver relevant
            information.
          </p>
          <p>
            How long personal data is stored: Landlords Rescue stores the personal data of Landlords for the duration of
            the Landlord's contract with the Tenant, and then in accordance with the limitation periods prescribed by
            English law. If the Landlord withdraws consent to receive marketing materials from Landlords Rescue, or if
            retention of personal data is no longer required in accordance with the principles outlined in Article 5 of
            the Regulation, personal data will be deleted or archived. When personal information is archived, it is kept
            so that Landlords Rescue does not lose its records regarding marketing consent or its withdrawal.
          </p>
        </section>
        <section>
          <Typography variant='h5' sx={{ my: 8, fontWeight: 'bold' }}>
            Tenants
          </Typography>
          <p>
            Tenants interested in learning more about Landlords Rescue's services can enter their information into our
            website at https://www.Landlords Rescue.com or any landing pages hosted at https://www.Landlords Rescue.com
            or via an enquiry form; or Tenants can email or call us using contact details provided on our website or
            elsewhere. Tenants provide Landlords Rescue with personal information in order to utilise Landlords Rescue's
            services. Personal information is collected when a Tenant submits their information online via the Landlords
            Rescue website. During the course of Landlords Rescue's provision of services to the Tenant, the Tenant may
            disclose additional personal information via more than one medium.
          </p>
          <p>
            Data collected via the Landlords Rescue website from Tenants may include their name, phone number, current
            and previous addresses, employment status and employment history, email address and IP address from the
            device being used, online identifiers, and location data. On occasion We may collect sensitive personal
            data. During the provision of Home Setup and similar services, we may also process move-to and move-from
            addresses, moving dates, tenancy information, and council tax status, as well as any other data required for
            the provision of those services (including data relating to other occupants or household members). When a
            Tenant visits our website, we may collect and process information about their website usage (such as their
            browsing history and navigation through our website) using cookies and other similar technologies. We may
            process information regarding interactions with us during communications.
          </p>
          <p>
            When a Tenant (by agreeing to Landlords Rescue's terms and conditions) discloses personal data to Landlords
            Rescue in order to use Landlords Rescue's services to assist the Tenant in a tenant credit reference,
            Landlords Rescue controls the subsequent disclosure of personal data to Landlords. When the data has been
            disclosed to the Landlord for further communication regarding the rental of the property, the Landlord
            becomes the data controller.
          </p>
          <p>
            Who processes the personal data: Where the Tenant, through Landlords Rescue, initiates discussions with the
            Landlord with the intention of entering into a contract with the Landlord; and Tenant personal data has been
            disclosed to the Landlord by Landlords Rescue; Tenant personal data is sent to the Landlord through
            Landlords Rescue under terms agreed with the Landlord. Under these terms, the processor is Landlords Rescue.
            Landlords Rescue may also process tenant data through our website, email, CRM, marketing platform providers,
            and third-party contractors who process data on our behalf. This is carried out in accordance with the
            Regulation and ePrivacy Directive.
          </p>
          <p>
            Where personal information is stored and how it is used: The tenant's personal information is provided for
            the purpose of acquiring Landlords Rescue's services, is stored in our databases, and is used primarily to
            enable us to provide those services. It may also be used to send you news and updates about our services, to
            implement and improve our services, including format and content, to administer our website and for internal
            operations, including troubleshooting, data analysis, testing, research, statistical, and survey purposes,
            as part of our efforts to keep our website safe and secure, to measure or understand the effectiveness of
            any advertising We serve you or others, and to deliver relevant information.
          </p>
          <p>
            How long personal data is stored: Landlords Rescue stores Tenant personal data for the duration of the
            Tenant's contract with the Landlord and thereafter in accordance with limitation periods prescribed by
            English law. Personal data will be deleted or archived if the Tenant withdraws consent to receive marketing
            materials from Landlords Rescue, or if retention of personal data is no longer necessary in accordance with
            the principles outlined in Article 5 of the Regulation. When personal information is archived, it is kept so
            that Landlords Rescue does not lose its records pertaining to marketing consent or its withdrawal.
          </p>
        </section>
        <section>
          <Typography variant='h5' sx={{ my: 8, fontWeight: 'bold' }}>
            Payment Data
          </Typography>
          <p>
            Users provide payment information to Landlords Rescue during the service onboarding process in order to
            purchase Landlords Rescue services, set up automatic payments, and permit us to make payments to them (for
            example, rent and deposit funds).
          </p>
          <p>
            Payment data includes a name, an address, a bank account sort code, a bank account number, a payment card
            long number, a payment card issue date, an expiration date, and a three-digit security number.
          </p>
          <p>
            Who controls the personal data: Payment data is controlled by Users and processed by Landlords Rescue in
            accordance with User instructions and subject to terms and conditions with Users.
          </p>
          <p>
            Who processes the personal data: Landlords Rescue and our third-party payment gateways process user payment
            data.
          </p>
          <p>
            User payment information is used to charge for the use of our services or to send rent collected by
            Landlords Rescue on behalf of the landlord. Tenant payment data may be used to debit the Tenant's account
            for payments required when the Tenant uses Landlords Rescue services; it may also be used if the Tenant has
            overpaid rent (for instance) and a record is needed to ensure appropriate reimbursement.
          </p>
        </section>
        <section>
          <Typography variant='h5' sx={{ my: 8, fontWeight: 'bold' }}>
            Employees
          </Typography>
          <p>
            Employees of Landlords Rescue provide their personal data to Landlords Rescue via email, digital or
            paper-exchange in order for the employee and Landlords Rescue to maintain a normal employer-employee
            relationship.
          </p>
          <p>
            Personal information collected may include a person's name, mobile phone number, email address, home
            address, photo, postcode, and notes regarding their role and skills. We collect health-related sensitive
            personal data only when necessary and proportionate.
          </p>
          <p>
            Who controls the personal information: Landlords Rescue controls the personal information of its employees.
          </p>
          <p>
            Who processes the personal data: Landlords Rescue processes employee personal data, which is also processed
            within third party platforms used to help us provide standard employment requirements, such as payment of
            the employee through a third-party payroll company; or dissemination of payment data to HMRC, as required by
            law.
          </p>
          <p>
            How the controller uses personal data: All Landlords Rescue employee data is used in accordance with the
            Regulation to ensure that the relationship between the employee and Landlords Rescue is conducted in
            accordance with the legal expectations of the parties and third parties (such as HMRC, as referred to
            above).
          </p>
          <p>
            Personal data is stored for the duration of the employee's contract with Landlords Rescue and thereafter in
            accordance with Landlords Rescue's data retention policy, which takes into account limitation periods under
            the general law.
          </p>
        </section>
        <section>
          <Typography variant='h5' sx={{ my: 8, fontWeight: 'bold' }}>
            Job Candidates
          </Typography>
          <p>
            Candidates interested in applying for a position at Landlords Rescue may provide their personal information
            via email or our job application platform to express their interest in a position.
          </p>
          <p>
            Personal data entered by job candidates may include their name, email, phone number, home address, place of
            employment, education, and employment history, in addition to their skills. We won't collect any sensitive
            personal information.
          </p>
          <p>Who controls the personal data: Landlords Rescue controls the data of job candidates</p>
          <p>
            Who processes personal data: Our software providers and consultants who help us recruit candidates and
            manage employees process data on job candidates.
          </p>
          <p>
            How the controller uses personal data: Landlords Rescue uses job candidate data to manage and communicate
            with applicants regarding the role they have applied for at Landlords Rescue.
          </p>
          <p>
            Personal data is used by the processor to enable us to accept and manage job applications and to support
            decision-making processes.
          </p>
          <p>
            Personal information is stored for as long as it is necessary. The data is then archived or deleted in
            accordance with our data retention policy.
          </p>
        </section>
        <section>
          <Typography variant='h5' sx={{ my: 8, fontWeight: 'bold' }}>
            Independent Contractors
          </Typography>
          <p>
            How personal data is collected: Landlords Rescue contracts with third parties to provide certain services,
            such as property inspections. Landlords Rescue utilises a variety of businesses in diverse geographies and
            collects the personal information of data subjects associated with the third-party businesses in question.
          </p>
          <p>
            Types of personal data collected may include: name, email, phone number, home address, place of employment,
            skill-set, and work history in addition to skills provided by data subjects linked to third parties. We
            won't collect any sensitive personal information.
          </p>
          <p>Who controls the personal data: Landlords Rescue controls the personal data of third parties.</p>
          <p>
            Who processes the personal data: Our suppliers process the personal data of third parties when such third
            parties require email instructions (for example) and when third parties are paid.
          </p>
          <p>
            How the controller uses personal data: Landlords Rescue manages the personal data of third parties when
            necessary to assist in the provision of services.
          </p>
          <p>
            How the processor uses personal data: Our processors use third-party personal data to ensure that
            third-party contractors have the information they need to provide Landlords Rescue with services and be
            compensated for doing so.
          </p>
          <p>
            Personal information is kept for as long as is required. The data is then archived or deleted in accordance
            with our data retention policy.
          </p>
        </section>
        <section>
          <Typography variant='h5' sx={{ my: 8, fontWeight: 'bold' }}>
            Sharing Knowledge
          </Typography>
          <p>
            We may share information with third parties so that they can help us provide our services; examples of such
            third parties include:
          </p>
          <ul>
            <li>
              Other Landlords Rescue Users, such as sharing your information with a User who is advertising a property
              if you request to view that property.
            </li>
            <li>
              Suppliers and sub-contractors for the performance of a contract, or (by way of illustration) providing
              your information to a gas engineer so that they can contact you and arrange a date and time to visit the
              property where the service was ordered.
            </li>
            <li>Analytics and search engine companies that aid us in enhancing and optimising our website.</li>
          </ul>
          <p>We may also share your personal information with third parties, including:</p>
          <ul>
            <li>
              If Landlords Rescue or a substantial portion of its assets are acquired by a third party, personal data
              held by Landlords Rescue (in whole or in part) may be one of the transferred assets.
            </li>
            <li>
              If We are required to disclose or share your personal information in order to comply with any legal
              obligation, or in order to enforce or apply our terms and other agreements; or to protect the rights,
              property, or safety of Landlords Rescue or others. This includes exchanging information with other
              companies and organisations for fraud prevention and credit risk reduction.
            </li>
          </ul>
        </section>
        <section>
          <Typography variant='h5' sx={{ my: 8, fontWeight: 'bold' }}>
            Moving Away From The EEA
          </Typography>
          <p>
            Storing personal data: We use cloud providers to store our personal data. Personal information may be
            transferred to and stored at a location outside the European Economic Area on occasion (EEA).
          </p>
          <p>
            We may use third parties to assist us in delivering our services, and they may be located outside the EEA.
            When transferring data outside of the EEA, we adhere to compliance mechanisms identified by the European
            Commission, such as the use of EU model contract clauses or conformance to the US Privacy Shield. Where We
            use sub processors acting on our behalf, We ensure that they adhere to European Commission-identified
            compliance mechanisms.
          </p>
          <p>
            Where We are the processor: Where We are the processor, we may transfer personal data to non-EEA (and
            non-adequate) jurisdictions per the instructions of a third-party controller, such as a Landlord. Where We
            do so, it is the responsibility of the third party to ensure that the transfer is compliant with GDPR.
          </p>
        </section>
        <section>
          <Typography variant='h5' sx={{ my: 8, fontWeight: 'bold' }}>
            Data Retention Periods
          </Typography>
          <p>
            Landlords Rescue has a data retention policy that, in accordance with Article 5 of the Regulation, specifies
            how long it will store personal data. Landlords Rescue retains personal information only as long as
            necessary. For instance, Landlords Rescue is required by law to retain certain information when the
            information is required for income tax and audit purposes. The length of time certain types of personal data
            must be stored may also be governed by industry-specific regulations and best practises. In accordance with
            Landlords Rescue's business needs, which are balanced against the requirements of the Regulation and the
            individual's rights, Landlords Rescue may retain personal data beyond these periods.
          </p>
          <p>
            Where We are the data controller, we will retain personal information for as long as is required. As
            described previously, in some instances We will be required by law or statute to retain information for a
            specific time period, such as the statute of limitations.
          </p>
          <p>
            Where We are the Data Processor: Personal data is stored as instructed by Landlords in accordance with their
            approach to the retention of personal data so long as it is compliant with the GDPR. For more information,
            please review (as applicable) their Terms of Service and Privacy Statement.
          </p>
        </section>
        <section>
          <Typography variant='h5' sx={{ my: 8, fontWeight: 'bold' }}>
            Protection Measures
          </Typography>
          <p>
            We have implemented security measures designed to prevent unauthorised access to or disclosure of the
            personal information We collect or receive in connection with our services. For example, to ensure the
            security of data, we employ encryption techniques and password protection. However, no data transmission or
            storage can be guaranteed to be 100% secure, and We cannot guarantee or warrant the security of any
            information that We collect and store.
          </p>
        </section>
        <section>
          <Typography variant='h5' sx={{ my: 8, fontWeight: 'bold' }}>
            Cookies
          </Typography>
          <p>
            We use cookies to differentiate you from other website visitors. This helps us provide you with a positive
            browsing experience on our website and allows us to enhance it. By navigating the site further, you consent
            to our use of cookies. A cookie is a small text file that We may store on your browser or computer's hard
            drive with your permission. Cookies contain information that is transferred to the hard drive of your
            computer. The following cookies are used:
          </p>
          <p>
            These cookies are required for the operation of our website and cannot be disabled. Cookies allow you to log
            in to secure areas of our website, for instance.
          </p>
          <p>
            These cookies allow us to recognise and count the number of visitors as well as observe how visitors
            navigate our website while they are using it. This helps us improve the functionality of our website, for
            instance by ensuring that users can easily locate the information they seek.
          </p>
          <p>
            These cookies are utilised to recognise you upon your return to our website. This allows us to tailor the
            content to your interests, greet you by name, and remember your preferences (for example, your choice of
            language or region).
          </p>
          <p>
            These cookies track your visit to our website, the pages you've viewed, and the links you've clicked. This
            information will be used to make our website more relevant to your interests.
          </p>
        </section>
        <section>
          <Typography variant='h5' sx={{ my: 8, fontWeight: 'bold' }}>
            Primitive Party Cookies
          </Typography>
          <p>How can I prevent first-party cookies?</p>
          <p>
            You block first-party cookies by activating the browser settings that allow you to refuse all cookies or
            just specific ones. However, if you configure your browser to block all cookies (including essential
            cookies), you may be unable to access our website in its entirety or in part.
          </p>
        </section>
        <section>
          <Typography variant='h5' sx={{ my: 8, fontWeight: 'bold' }}>
            Cookies from Third-Party Websites
          </Typography>
          <p>
            We may use third-party services, such as Google Analytics cookies, to track anonymous usage statistics, but
            we do not collect any identifying information. This information allows us to analyse page usage and tailor
            our website to the needs of our audience. Services such as Google Analytics keep track of the web pages you
            visit, how long you spend on the site, how you got there, and the links you click. These cookies are served
            by a third-party service provider and are typically used to identify your computer when it visits another
            website, such as when you log in to a social networking site to share an article.
          </p>
          <p>How do I block cookies from third parties?</p>
          <p>
            You prevent third-party cookies by activating the browser setting that allows you to refuse the setting of
            all cookies. However, if you configure your browser to block all cookies (including essential cookies), you
            may be unable to access our website in its entirety or in part.
          </p>
          <p>Additional Information</p>
          <p>There is more information about cookies at https://www.allaboutcookies.org.</p>
          <p>Guide to online advertising and privacy from the Internet Advertising Bureau</p>
          <p>ICC UK cookie guide, published by the International Chamber of Commerce in the United Kingdom</p>
        </section>
        <section>
          <Typography variant='h5' sx={{ my: 8, fontWeight: 'bold' }}>
            Your Right To Complain
          </Typography>
          <p>
            You can file a complaint with the Information Commissioner of the United Kingdom (the Information
            Commissioner) by contacting www.ico.org.uk and following the instructions provided. Please email
            dpo@Landlords Rescue.co.uk if you wish to contact Landlords Rescue about your concerns.
          </p>
        </section>
        <section>
          <Typography variant='h5' sx={{ my: 8, fontWeight: 'bold' }}>
            Communicating with You
          </Typography>
          <p>
            The personal information We process is subject to stringent measures and procedures designed to reduce the
            likelihood of unauthorised access or disclosure. When required by the Regulation, we will notify both the
            supervisory authority (in Landlords Rescue's case, the Information Commissioner) and the affected data
            subjects.
          </p>
        </section>
        <section>
          <Typography variant='h5' sx={{ my: 8, fontWeight: 'bold' }}>
            Modifications to the Privacy Statement
          </Typography>
          <p>
            If We make modifications to this privacy statement, We will notify you by posting the updated version on our
            website.
          </p>
        </section>
        <section>
          <Typography variant='h5' sx={{ my: 8, fontWeight: 'bold' }}>
            Communicating with You
          </Typography>
          <p>
            The personal information We process is subject to stringent measures and procedures designed to reduce the
            likelihood of unauthorised access or disclosure. When required by the Regulation, we will notify both the
            supervisory authority (in Landlords Rescue's case, the Information Commissioner) and the affected data
            subjects.
          </p>
        </section>
        <section>
          <Typography variant='h5' sx={{ my: 8, fontWeight: 'bold' }}>
            Legal Rights
          </Typography>
          <p>
            At the data subject's request and where technically feasible, We will confirm the information We maintain
            about the data subject and the manner in which it is processed. In accordance with the provisions of the
            Regulation, a data subject may request the following:
          </p>
          <ul>
            <li>
              The identity and contact information of the individual or entity that determined how and why to process
              personal data. In some instances, this will be an EU representative.
            </li>
            <li>The data protection officer's contact information, where applicable.</li>
            <li>The objective of the processing and the legal basis for doing so.</li>
            <li>
              If the processing is based on Landlords Rescue's or a third party's legitimate interests, details about
              those interests.
            </li>
            <li>The categories of personally identifiable information collected, stored, and processed.</li>
            <li>Recipient(s) or recipient categories to whom the data is/will be disclosed.</li>
            <li>
              If We intend to transfer the personal data to a third country or international organisation, details on
              how We will ensure the security of the transfer. The EU has authorised the transfer of personal data to
              certain countries because they meet a minimum data protection standard. In all other instances, We will
              ensure that specific security measures are in place.
            </li>
            <li>Duration of personal information storage</li>
            <li>
              Specifics on the rights of the data subject to rectify, delete, restrict, or object to such processing
            </li>
            <li>Information regarding the right of the data subject to withdraw consent at any time</li>
            <li>How to file a complaint with the governing body.</li>
            <li>
              Whether the provision of personal data is a statutory or contractual requirement, or a requirement
              necessary to enter into a contract, as well as whether We are required to provide the personal data and
              the potential repercussions of failing to do so.
            </li>
            <li>The origin of your personal information if it was not collected directly from you.</li>
            <li>
              Any specifics and information pertaining to automated decision making, such as profiling, as well as any
              meaningful information regarding the logic involved, as well as the significance and anticipated outcomes
              of such processing.
            </li>
          </ul>
          <p>What forms of identification will I need to provide to access this?</p>
          <p>
            Landlords Rescue accepts the following forms of identification when requesting personal data: passport,
            driver's licence, birth certificate, and three-month-old utility bill. We reserve the right to request
            additional identification information if your identity is unclear.
          </p>
        </section>
        <section>
          <Typography variant='h5' sx={{ my: 8, fontWeight: 'bold' }}>
            Contact Details
          </Typography>
          <p>Landlords Rescue, Inc.</p>
          <p>Personnel Ressources: Data Protection Officer</p>
          <p>Address: Fullford House, Newbold Terrace, Royal Leamington Spa, Warwickshire, CV32 4EA</p>
          <p>
            Email: <Link href='mailto:dpo@Landlords Rescue.co.uk'>dpo@Landlords Rescue.co.uk</Link>{' '}
          </p>
          <p>Type-Specific Summary Of Data Processors</p>
          <p>
            In order to provide our services to our Users, Landlords Rescue collaborates with carefully chosen third
            parties in the non-exhaustive list of sectors/disciplines below:
          </p>
          <ul>
            <li>Nature/Description of Processing</li>
            <li>Hosting</li>
            <li>Personal and general organisational data storage</li>
            <li>SMS Service Provider Messages; data</li>
            <li>Software for financial and contractual management</li>
            <li>Accounting applications and payroll services</li>
            <li>Email Provision Transfer of messages and data between parties</li>
            <li>Financial Services</li>
            <li>Reference Services Tenant evaluation</li>
            <li>Transfer of funds/consideration</li>
            <li>Systems for Marketing and Customer Service Management</li>
            <li>Tenant and Landlord personal information is stored in a hosted environment.</li>
          </ul>
        </section>
      </Container>
      <Toolbar />
      <Footer />
    </div>
  )
}

PrivacyPolicy.getLayout = (page: ReactNode) => <BlankLayoutWithAppBar>{page}</BlankLayoutWithAppBar>

PrivacyPolicy.guestGuard = true
