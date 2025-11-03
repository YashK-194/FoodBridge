import Image from "next/image";

export default function Home() {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
				{/* Background Image */}
				<div className="absolute inset-0 z-0">
					<div className="absolute inset-0 bg-linear-to-r from-[#2E4938]/90 to-[#2E4938]/70 z-10"></div>
					<Image
						src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070"
						alt="Food donation"
						fill
						className="object-cover"
						priority
					/>
				</div>

				{/* Hero Content */}
				<div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
					<div className="mb-8 flex justify-center">
						<Image src="/images/logo.png" alt="FoodBridge Logo" width={120} height={120} className="rounded-full shadow-2xl" />
					</div>

					<h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">FoodBridge</h1>

					<p className="text-2xl sm:text-3xl md:text-4xl text-[#DE673F] font-semibold mb-8 italic">Connecting plates, spreading hope</p>

					<p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
						Join us in our mission to end hunger. Every meal matters, every donation counts. Together, we can make a difference in the
						lives of those who need it most.
					</p>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
						<a
							href="https://docs.google.com/forms/d/e/1FAIpQLSfUdu4dS9f6PHOm4be7XFq3IAmJPcJWoduQ-WwvVk6xkA1sig/viewform"
							target="_blank"
							rel="noopener noreferrer"
							className="w-full sm:w-auto px-8 py-4 bg-[#DE673F] text-white font-semibold rounded-full hover:bg-[#c55835] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
						>
							🍽️ Donate Food
						</a>

						<a
							href="https://docs.google.com/forms/d/e/1FAIpQLSfFAShyHTDlvya-zee8kgMJJyZ2PsGw5BVb_UySXVqzBkka8g/viewform"
							target="_blank"
							rel="noopener noreferrer"
							className="w-full sm:w-auto px-8 py-4 bg-white text-[#2E4938] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
						>
							🤝 Volunteer
						</a>

						<a
							href="https://docs.google.com/forms/d/e/1FAIpQLSc6h3LxODPzTSvgL01jexl0Bs18-Yes5tddpajV6xLJhBuuzQ/viewform"
							target="_blank"
							rel="noopener noreferrer"
							className="w-full sm:w-auto px-8 py-4 bg-[#2E4938] text-white font-semibold rounded-full hover:bg-[#1f3126] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center border-2 border-white"
						>
							🏢 NGO Registration
						</a>
					</div>
				</div>

				{/* Scroll Indicator */}
				<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
					<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</div>
			</section>

			{/* What We Do Section */}
			<section className="py-16 sm:py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl sm:text-5xl font-bold text-[#2E4938] mb-4">What We Do</h2>
						<div className="w-24 h-1 bg-[#DE673F] mx-auto mb-6"></div>
						<p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
							FoodBridge connects generous donors with NGOs to ensure no food goes to waste and no one goes hungry.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8 sm:gap-12">
						{/* Card 1 */}
						<div className="bg-linear-to-br from-[#2E4938] to-[#1f3126] rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
							<div className="text-5xl mb-6">🍲</div>
							<h3 className="text-2xl font-bold mb-4">Food Collection</h3>
							<p className="text-white/90 leading-relaxed">
								We collect surplus food from restaurants, events, and individuals who want to make a difference. Every donation, big
								or small, helps feed someone in need.
							</p>
						</div>

						{/* Card 2 */}
						<div className="bg-linear-to-br from-[#DE673F] to-[#c55835] rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
							<div className="text-5xl mb-6">🤲</div>
							<h3 className="text-2xl font-bold mb-4">Partner Network</h3>
							<p className="text-white/90 leading-relaxed">
								We work with verified NGOs across the region to ensure food reaches those who need it most. Our partners are dedicated
								to fighting hunger in their communities.
							</p>
						</div>

						{/* Card 3 */}
						<div className="bg-linear-to-br from-[#2E4938] to-[#1f3126] rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
							<div className="text-5xl mb-6">❤️</div>
							<h3 className="text-2xl font-bold mb-4">Community Impact</h3>
							<p className="text-white/90 leading-relaxed">
								Together, we've served thousands of meals to families, children, and individuals facing food insecurity. Your
								contribution creates lasting change.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Food Wastage Awareness Section */}
			<section className="py-16 sm:py-24 bg-linear-to-br from-[#DE673F] to-[#c55835] relative overflow-hidden">
				<div className="absolute inset-0 opacity-10">
					<div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
					<div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full"></div>
					<div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full"></div>
				</div>

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div className="text-white">
							<h2 className="text-4xl sm:text-5xl font-bold mb-6">The Food Wastage Crisis in India</h2>
							<div className="w-24 h-1 bg-white mb-8"></div>

							<div className="space-y-6 text-lg leading-relaxed">
								<p className="text-white/95">
									Every year in India, <span className="font-bold text-2xl">millions of tons of food</span> are wasted while
									countless people go to bed hungry. This paradox is especially stark during weddings, parties, and corporate
									events.
								</p>

								<div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
									<h3 className="text-2xl font-bold mb-4 flex items-center">
										<span className="text-3xl mr-3">⚠️</span>
										Alarming Statistics
									</h3>
									<ul className="space-y-3">
										<li className="flex items-start">
											<span className="text-[#2E4938] font-bold text-xl mr-3">•</span>
											<span>
												<strong>40% of food</strong> produced in India is wasted annually
											</span>
										</li>
										<li className="flex items-start">
											<span className="text-[#2E4938] font-bold text-xl mr-3">•</span>
											<span>
												Wedding receptions waste <strong>15-20% of prepared food</strong>
											</span>
										</li>
										<li className="flex items-start">
											<span className="text-[#2E4938] font-bold text-xl mr-3">•</span>
											<span>
												<strong>194 million Indians</strong> go hungry every day
											</span>
										</li>
										<li className="flex items-start">
											<span className="text-[#2E4938] font-bold text-xl mr-3">•</span>
											<span>
												Food waste contributes significantly to <strong>greenhouse gas emissions</strong>
											</span>
										</li>
									</ul>
								</div>

								<p className="text-white/95 text-xl font-semibold">
									FoodBridge aims to bridge this gap by rescuing surplus food from events and ensuring it reaches those who need it
									most.
								</p>
							</div>
						</div>

						<div className="space-y-6">
							<div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform">
								<div className="text-5xl mb-4">🎊</div>
								<h3 className="text-2xl font-bold text-[#2E4938] mb-3">Weddings & Celebrations</h3>
								<p className="text-gray-700 leading-relaxed">
									Indian weddings are grand affairs with abundant food. Instead of letting surplus go to waste, FoodBridge helps you
									donate it to feed families in need, turning celebration into compassion.
								</p>
							</div>

							<div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform">
								<div className="text-5xl mb-4">🏢</div>
								<h3 className="text-2xl font-bold text-[#2E4938] mb-3">Corporate Events</h3>
								<p className="text-gray-700 leading-relaxed">
									Office parties, conferences, and corporate gatherings often have leftover food. We coordinate quick pickups to
									redistribute this food while it's still fresh and nutritious.
								</p>
							</div>

							<div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform">
								<div className="text-5xl mb-4">🍽️</div>
								<h3 className="text-2xl font-bold text-[#2E4938] mb-3">Restaurants & Caterers</h3>
								<p className="text-gray-700 leading-relaxed">
									Daily surplus from restaurants and catering businesses can feed hundreds. Partner with us to reduce waste and make
									a positive social impact while supporting your community.
								</p>
							</div>
						</div>
					</div>

					<div className="mt-12 text-center">
						<div className="inline-block bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-6 border-2 border-white">
							<p className="text-white text-xl sm:text-2xl font-bold mb-4">Be Part of the Solution - Not the Problem</p>
							<p className="text-white/90 text-lg mb-6">Every meal saved is a step towards ending hunger and reducing waste</p>
							<a
								href="https://docs.google.com/forms/d/e/1FAIpQLSfUdu4dS9f6PHOm4be7XFq3IAmJPcJWoduQ-WwvVk6xkA1sig/viewform"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block px-8 py-4 bg-[#2E4938] text-white font-semibold rounded-full hover:bg-[#1f3126] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
							>
								Donate Food from Your Event
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* How It Works Section */}
			<section className="py-16 sm:py-24 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl sm:text-5xl font-bold text-[#2E4938] mb-4">How It Works</h2>
						<div className="w-24 h-1 bg-[#DE673F] mx-auto mb-6"></div>
						<p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
							A simple, transparent process that makes donating food easy and impactful.
						</p>
					</div>

					<div className="relative">
						{/* Vertical line for mobile, horizontal for desktop */}
						<div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#DE673F] md:left-0 md:top-1/2 md:right-0 md:bottom-auto md:w-full md:h-0.5"></div>

						<div className="space-y-12 md:space-y-0 md:grid md:grid-cols-4 md:gap-8">
							{/* Step 1 */}
							<div className="relative pl-20 md:pl-0 md:pt-20">
								<div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 md:top-0 w-16 h-16 bg-[#DE673F] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
									1
								</div>
								<div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
									<h3 className="text-xl font-bold text-[#2E4938] mb-3">Register</h3>
									<p className="text-gray-600">Fill out our simple form to register as a donor, volunteer, or NGO partner.</p>
								</div>
							</div>

							{/* Step 2 */}
							<div className="relative pl-20 md:pl-0 md:pt-20">
								<div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 md:top-0 w-16 h-16 bg-[#DE673F] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
									2
								</div>
								<div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
									<h3 className="text-xl font-bold text-[#2E4938] mb-3">Donate</h3>
									<p className="text-gray-600">Submit details about the food you'd like to donate through our platform.</p>
								</div>
							</div>

							{/* Step 3 */}
							<div className="relative pl-20 md:pl-0 md:pt-20">
								<div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 md:top-0 w-16 h-16 bg-[#DE673F] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
									3
								</div>
								<div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
									<h3 className="text-xl font-bold text-[#2E4938] mb-3">Connect</h3>
									<p className="text-gray-600">We connect you with nearby NGOs and arrange for food pickup or delivery.</p>
								</div>
							</div>

							{/* Step 4 */}
							<div className="relative pl-20 md:pl-0 md:pt-20">
								<div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 md:top-0 w-16 h-16 bg-[#DE673F] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
									4
								</div>
								<div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
									<h3 className="text-xl font-bold text-[#2E4938] mb-3">Impact</h3>
									<p className="text-gray-600">Your donation feeds families and makes a real difference in the community.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Banner Section */}
			<section className="py-16 bg-[#2E4938]">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
					<Image
						src="/images/banner.png"
						alt="FoodBridge - Connecting plates, spreading hope"
						width={800}
						height={800}
						className="rounded-lg shadow-2xl w-full max-w-2xl h-auto"
					/>
				</div>
			</section>

			{/* Call to Action Section */}
			<section className="py-16 sm:py-24 bg-linear-to-br from-[#DE673F] to-[#c55835]">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to Make a Difference?</h2>
						<p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
							Every contribution counts. Join our mission to end hunger and reduce food waste across India.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						{/* Volunteer Section */}
						<div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
							<div className="text-5xl mb-4 text-center">🤝</div>
							<h3 className="text-2xl font-bold text-[#2E4938] mb-4 text-center">Become a Volunteer</h3>
							<p className="text-gray-700 mb-6 leading-relaxed text-center">
								Be the change you wish to see! Your time and effort can transform lives. Join our growing community of compassionate
								volunteers who collect and deliver meals to those in need.
							</p>
							<div className="space-y-3 mb-6">
								<div className="flex items-center text-gray-700">
									<span className="text-[#DE673F] mr-3 text-xl">✓</span>
									<span>Flexible schedules that fit your life</span>
								</div>
								<div className="flex items-center text-gray-700">
									<span className="text-[#DE673F] mr-3 text-xl">✓</span>
									<span>Make meaningful connections</span>
								</div>
								<div className="flex items-center text-gray-700">
									<span className="text-[#DE673F] mr-3 text-xl">✓</span>
									<span>Experience the joy of giving</span>
								</div>
							</div>
							<a
								href="https://docs.google.com/forms/d/e/1FAIpQLSfFAShyHTDlvya-zee8kgMJJyZ2PsGw5BVb_UySXVqzBkka8g/viewform"
								target="_blank"
								rel="noopener noreferrer"
								className="block w-full text-center px-8 py-4 bg-[#DE673F] text-white font-semibold rounded-full hover:bg-[#c55835] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
							>
								Join as Volunteer
							</a>
						</div>

						{/* NGO Registration Section */}
						<div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
							<div className="text-5xl mb-4 text-center">🏢</div>
							<h3 className="text-2xl font-bold text-[#2E4938] mb-4 text-center">Register Your NGO</h3>
							<p className="text-gray-700 mb-6 leading-relaxed text-center">
								Amplify your impact! Partner with FoodBridge to receive consistent food donations for your community. Together, we can
								feed more families and create lasting change.
							</p>
							<div className="space-y-3 mb-6">
								<div className="flex items-center text-gray-700">
									<span className="text-[#DE673F] mr-3 text-xl">✓</span>
									<span>Regular food supply for your beneficiaries</span>
								</div>
								<div className="flex items-center text-gray-700">
									<span className="text-[#DE673F] mr-3 text-xl">✓</span>
									<span>Efficient coordination system</span>
								</div>
								<div className="flex items-center text-gray-700">
									<span className="text-[#DE673F] mr-3 text-xl">✓</span>
									<span>Join a network of verified partners</span>
								</div>
							</div>
							<a
								href="https://docs.google.com/forms/d/e/1FAIpQLSc6h3LxODPzTSvgL01jexl0Bs18-Yes5tddpajV6xLJhBuuzQ/viewform"
								target="_blank"
								rel="noopener noreferrer"
								className="block w-full text-center px-8 py-4 bg-[#2E4938] text-white font-semibold rounded-full hover:bg-[#1f3126] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
							>
								Register Your NGO
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Statistics Section */}
			<section className="py-16 sm:py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-4xl sm:text-5xl font-bold text-[#2E4938] mb-4">Our Impact</h2>
						<div className="w-24 h-1 bg-[#DE673F] mx-auto mb-6"></div>
						<p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
							Every action we take creates a ripple effect of positive change in our communities.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
						<div className="bg-linear-to-br from-[#DE673F] to-[#c55835] rounded-2xl p-10 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
							<div className="text-6xl mb-6 text-center">🍽️</div>
							<h3 className="text-3xl font-bold mb-4 text-center">Feeding People in Need</h3>
							<p className="text-white/95 text-lg leading-relaxed text-center">
								We bridge the gap between surplus and scarcity, ensuring that nutritious meals reach families, children, and
								individuals facing hunger. Every donation becomes a warm meal for someone in need, transforming lives one plate at a
								time.
							</p>
						</div>

						<div className="bg-linear-to-br from-[#2E4938] to-[#1f3126] rounded-2xl p-10 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
							<div className="text-6xl mb-6 text-center">♻️</div>
							<h3 className="text-3xl font-bold mb-4 text-center">Reducing Food Wastage</h3>
							<p className="text-white/95 text-lg leading-relaxed text-center">
								By rescuing surplus food from events, restaurants, and celebrations, we prevent tons of perfectly good food from
								ending up in landfills. Together, we're building a sustainable future while combating climate change and environmental
								degradation.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-16 sm:py-24 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl sm:text-5xl font-bold text-[#2E4938] mb-4">What People Say</h2>
						<div className="w-24 h-1 bg-[#DE673F] mx-auto mb-6"></div>
						<p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
							Hear from our donors, volunteers, and partner NGOs about their experience with FoodBridge.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
							<div className="text-[#DE673F] text-4xl mb-4">"</div>
							<p className="text-gray-700 mb-6 leading-relaxed">
								FoodBridge made it incredibly easy to donate surplus food from our restaurant. Knowing it's reaching those in need
								gives us immense satisfaction.
							</p>
							<div className="flex items-center">
								<div className="w-12 h-12 bg-[#2E4938] rounded-full flex items-center justify-center text-white font-bold mr-4">
									R
								</div>
								<div>
									<p className="font-semibold text-[#2E4938]">Ravi Sharma</p>
									<p className="text-gray-500 text-sm">Restaurant Owner</p>
								</div>
							</div>
						</div>

						<div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
							<div className="text-[#DE673F] text-4xl mb-4">"</div>
							<p className="text-gray-700 mb-6 leading-relaxed">
								Volunteering with FoodBridge has been life-changing. Every delivery reminds me of the power of community and kindness.
							</p>
							<div className="flex items-center">
								<div className="w-12 h-12 bg-[#2E4938] rounded-full flex items-center justify-center text-white font-bold mr-4">
									P
								</div>
								<div>
									<p className="font-semibold text-[#2E4938]">Priya Patel</p>
									<p className="text-gray-500 text-sm">Volunteer</p>
								</div>
							</div>
						</div>

						<div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
							<div className="text-[#DE673F] text-4xl mb-4">"</div>
							<p className="text-gray-700 mb-6 leading-relaxed">
								As an NGO, partnering with FoodBridge has helped us serve more families. Their platform is efficient and reliable.
							</p>
							<div className="flex items-center">
								<div className="w-12 h-12 bg-[#2E4938] rounded-full flex items-center justify-center text-white font-bold mr-4">
									A
								</div>
								<div>
									<p className="font-semibold text-[#2E4938]">Anjali Verma</p>
									<p className="text-gray-500 text-sm">NGO Director</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-16 sm:py-24 bg-white">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl sm:text-5xl font-bold text-[#2E4938] mb-4">Frequently Asked Questions</h2>
						<div className="w-24 h-1 bg-[#DE673F] mx-auto"></div>
					</div>

					<div className="space-y-6">
						<details className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors cursor-pointer group">
							<summary className="font-semibold text-lg text-[#2E4938] cursor-pointer list-none flex justify-between items-center">
								<span>Planning a wedding or event? How can FoodBridge help?</span>
								<span className="text-[#DE673F] text-2xl group-open:rotate-45 transition-transform">+</span>
							</summary>
							<p className="mt-4 text-gray-600 leading-relaxed">
								Before you finalize your next wedding, birthday party, corporate event, or celebration, think FoodBridge! Instead of
								letting surplus food go to waste, we can help you make a meaningful impact. Simply register your event with us in
								advance, and we'll coordinate with our volunteer network to collect leftover food and distribute it to those in need
								within hours. Every wedding and event is an opportunity to feed hungry families while reducing waste. Make your
								celebration truly memorable by spreading joy beyond your guest list. Contact us during your event planning stage, and
								we'll handle the rest - it's that simple!
							</p>
						</details>

						<details className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors cursor-pointer group">
							<summary className="font-semibold text-lg text-[#2E4938] cursor-pointer list-none flex justify-between items-center">
								<span>What kind of food can I donate?</span>
								<span className="text-[#DE673F] text-2xl group-open:rotate-45 transition-transform">+</span>
							</summary>
							<p className="mt-4 text-gray-600 leading-relaxed">
								You can donate freshly cooked food, packaged food items, fruits, vegetables, and baked goods. We ensure all donations
								meet safety standards before distribution.
							</p>
						</details>

						<details className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors cursor-pointer group">
							<summary className="font-semibold text-lg text-[#2E4938] cursor-pointer list-none flex justify-between items-center">
								<span>How quickly should food be donated after preparation?</span>
								<span className="text-[#DE673F] text-2xl group-open:rotate-45 transition-transform">+</span>
							</summary>
							<p className="mt-4 text-gray-600 leading-relaxed">
								For freshly cooked food, we recommend donating within 2-3 hours of preparation to ensure freshness and safety. Our
								volunteers coordinate quick pickups.
							</p>
						</details>

						<details className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors cursor-pointer group">
							<summary className="font-semibold text-lg text-[#2E4938] cursor-pointer list-none flex justify-between items-center">
								<span>Is there a minimum quantity required for donation?</span>
								<span className="text-[#DE673F] text-2xl group-open:rotate-45 transition-transform">+</span>
							</summary>
							<p className="mt-4 text-gray-600 leading-relaxed">
								No minimum quantity required! Whether you have food for 5 people or 500, every donation makes a difference. We
								coordinate with NGOs based on the quantity available.
							</p>
						</details>

						<details className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors cursor-pointer group">
							<summary className="font-semibold text-lg text-[#2E4938] cursor-pointer list-none flex justify-between items-center">
								<span>How can I become a volunteer?</span>
								<span className="text-[#DE673F] text-2xl group-open:rotate-45 transition-transform">+</span>
							</summary>
							<p className="mt-4 text-gray-600 leading-relaxed">
								Simply fill out our volunteer registration form. We'll contact you with opportunities based on your location and
								availability. No prior experience needed!
							</p>
						</details>

						<details className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors cursor-pointer group">
							<summary className="font-semibold text-lg text-[#2E4938] cursor-pointer list-none flex justify-between items-center">
								<span>How can NGOs partner with FoodBridge?</span>
								<span className="text-[#DE673F] text-2xl group-open:rotate-45 transition-transform">+</span>
							</summary>
							<p className="mt-4 text-gray-600 leading-relaxed">
								NGOs can register through our NGO registration form. We verify organizations to ensure they're equipped to handle and
								distribute food safely to communities in need.
							</p>
						</details>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-16 sm:py-24 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl sm:text-5xl font-bold text-[#2E4938] mb-4">Get In Touch</h2>
						<div className="w-24 h-1 bg-[#DE673F] mx-auto mb-6"></div>
						<p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
							Have questions or want to learn more? Our team is here to help you make a difference.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{/* Contact Card 1 */}
						<div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
							<div className="flex items-start space-x-4">
								<div className="w-16 h-16 bg-linear-to-br from-[#DE673F] to-[#c55835] rounded-full flex items-center justify-center text-white text-2xl font-bold shrink-0">
									Y
								</div>
								<div className="flex-1">
									<h3 className="text-2xl font-bold text-[#2E4938] mb-2">Yash Kumar</h3>
									<p className="text-gray-600 mb-4">Co-Founder & Project Lead</p>
									<div className="flex items-center text-gray-700 mb-2">
										<svg className="w-5 h-5 mr-3 text-[#DE673F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
											/>
										</svg>
										<a href="mailto:yashkm194@gmail.com" className="hover:text-[#DE673F] transition-colors">
											yashkm194@gmail.com
										</a>
									</div>
								</div>
							</div>
						</div>

						{/* Contact Card 2 */}
						<div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
							<div className="flex items-start space-x-4">
								<div className="w-16 h-16 bg-linear-to-br from-[#2E4938] to-[#1f3126] rounded-full flex items-center justify-center text-white text-2xl font-bold shrink-0">
									M
								</div>
								<div className="flex-1">
									<h3 className="text-2xl font-bold text-[#2E4938] mb-2">Mudassir Husain</h3>
									<p className="text-gray-600 mb-4">Co-Founder & Operations Head</p>
									<div className="flex items-center text-gray-700 mb-2">
										<svg className="w-5 h-5 mr-3 text-[#DE673F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
											/>
										</svg>
										<a href="mailto:itsmudassir.official@gmail.com" className="hover:text-[#DE673F] transition-colors">
											itsmudassir.official@gmail.com
										</a>
									</div>
								</div>
							</div>
						</div>

						{/* Contact Card 3 */}
						<div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
							<div className="flex items-start space-x-4">
								<div className="w-16 h-16 bg-linear-to-br from-[#DE673F] to-[#c55835] rounded-full flex items-center justify-center text-white text-2xl font-bold shrink-0">
									S
								</div>
								<div className="flex-1">
									<h3 className="text-2xl font-bold text-[#2E4938] mb-2">Shivam Singh</h3>
									<p className="text-gray-600 mb-4">Co-Founder & Community Manager</p>
									<div className="flex items-center text-gray-700 mb-2">
										<svg className="w-5 h-5 mr-3 text-[#DE673F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
											/>
										</svg>
										<a href="mailto:singhshivam79060@gmail.com" className="hover:text-[#DE673F] transition-colors">
											singhshivam79060@gmail.com
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* General Contact Info */}
					<div className="mt-12 text-center">
						<div className="bg-linear-to-r from-[#2E4938] to-[#1f3126] rounded-2xl p-8 text-white max-w-2xl mx-auto">
							<h3 className="text-2xl font-bold mb-4">General Inquiries</h3>
							<p className="text-white/90 mb-6">
								For general questions, partnership opportunities, or media inquiries, feel free to reach out to either of us. We
								typically respond within 24 hours.
							</p>
							<div className="flex flex-wrap justify-center gap-4">
								<div className="flex items-center">
									<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
										/>
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
									</svg>
									<span>Serving Communities Nationwide</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-[#2E4938] text-white py-8">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<p className="text-lg mb-2">FoodBridge</p>
					<p className="text-white/70 italic">Connecting plates, spreading hope</p>
					<p className="text-white/60 text-sm mt-4">© 2025 FoodBridge. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
}
