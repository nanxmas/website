<script>
	import Box from '$components/Box.svelte';
	import Button from '$components/Button.svelte';
	import Card from '$components/Card.svelte';
	import Feature from '$components/Feature.svelte';
	import Link from '$components/Link.svelte';
</script>

<svelte:head>
	<title>Discord bot • Christmas Countdown</title>
	<meta name="title" content="Discord bot • Christmas Countdown" />
	<meta name="og:title" content="Discord bot • Christmas Countdown" />
	<meta name="twitter:title" content="Discord bot • Christmas Countdown" />
	<meta
		name="description"
		content="Get the number of sleeps left until Christmas sent to a selected channel every morning - in your language and your timezone."
	/>
	<meta
		name="og:description"
		content="Get the number of sleeps left until Christmas sent to a selected channel every morning - in your language and your timezone."
	/>
	<meta
		name="twitter:description"
		content="Get the number of sleeps left until Christmas sent to a selected channel every morning - in your language and your timezone."
	/>
</svelte:head>

<div>
	<h1 class="select-none text-center my-8">
		<p class="text-xl uppercase p-2">The original</p>
		<p class="font-christmas text-7xl p-2">Christmas Countdown</p>
		<p class="text-2xl uppercase p-2">bot for Discord</p>
	</h1>

	<Box>
		<div class="my-8 text-center p-8">
			<div class="my-6">
				<p>
					Add the Christmas Countdown bot for Discord to your server to get the number of sleeps
					left until Christmas sent to a selected channel every morning. The bot has been added to
					over 8000 Discord servers since 2018.
				</p>
			</div>
			<div>
				<a href="/discord/add" class="umami--click--add1">
					<Button colour="bg-blurple" text="Add to Discord" icon="fab fa-discord" />
				</a>
				<a href="/discord/commands" class="umami--click--commands">
					<Button colour="bg-gray-600" text="View documentation" />
				</a>
			</div>
		</div>
	</Box>

	<h2 class="text-xl font-bold text-center mb-4">Features</h2>

	<div id="features" class="container mx-auto w-full m-8">
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
			<Feature title="Daily countdown">
				<p>
					<Link href="/discord/enable-the-countdown">Set the countdown channel</Link> and get a countdown
					message ready for when you wake up every morning.
				</p>
				<img
					src="https://static.eartharoid.me/sharex/21/10/bot-countdown.png"
					alt="Countdown"
					class="my-4"
				/>
				<p class="text-right">
					<Link href="/discord/enable-the-countdown"
						>Learn more <i class="fas fa-arrow-right" /></Link
					>
				</p>
			</Feature>
			<Feature title="Time left to Christmas in...">
				<p>months, weeks, sleeps, days, hours, minutes, seconds, or the total time left.</p>
				<img
					src="https://static.eartharoid.me/sharex/21/10/bot-total-cmd.png"
					alt="Total"
					class="my-4"
				/>
				<!-- <img
					src="https://static.eartharoid.me/sharex/21/10/bot-hours-cmd.png"
					alt="Hours"
					class="my-4"
				/> -->
			</Feature>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
			<Box>
				<div class="p-6">
					<span class="uppercase font-bold p-1.5 text-sm rounded-lg bg-primary">
						Experimental
					</span>
					<h3 class="font-bold text-xl mt-3 mb-2">Secret Santa</h3>
					<p>
						Whether it's for a small group of friends who are sharing physical presents, or a large
						community exchanging virtual gifts (such as in-game items), this <span class="italic"
							>experimental</span
						> feature makes it easy to organise a Secret Santa event.
					</p>
					<p class="text-right">
						<Link href="/discord/secret-santa">Learn more <i class="fas fa-arrow-right" /></Link>
					</p>
				</div>
			</Box>
			<a href="/discord/rpc" class="transform hover:scale-105 duration-300 umami--click--rpc">
				<!-- hover:-translate-y-2 -->
				<Card background="bg-blurple" border="border-blurple">
					<div class="p-6">
						<h2 class="font-bold text-xl mb-2">Discord RPC <i class="fas fa-arrow-right" /></h2>
						<p>
							Add a Christmas Countdown to your Discord presence/status and unlock additional
							features.
							<Link href="/discord/rpc">Learn more <i class="fas fa-arrow-right" /></Link>
							<img src="https://static.eartharoid.me/k/22/06/30011959.png" alt="Screenshot" />
						</p>
					</div>
				</Card>
			</a>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
			<Box>
				<div class="p-6">
					<span class="uppercase font-bold p-1.5 text-sm rounded-lg bg-primary">
						Experimental
					</span>
					<h3 class="font-bold text-xl mt-3 mb-2">Santa tracker</h3>
					<p>
						Check Santa's location with a message that updates every couple of minutes on Christmas
						Eve.
					</p>
					<img
						src="https://static.eartharoid.me/sharex/21/12/bot-tracker.png"
						alt="Commands"
						class="my-4"
					/>
				</div>
			</Box>
			<Feature title="Jokes">
				<p>
					Use the <Link href="/discord/commands#joke"><code class="text-primary">/joke</code></Link>
					command to get a random Christmas joke.
				</p>
				<img
					src="https://static.eartharoid.me/sharex/21/10/bot-joke-cmd.png"
					alt="Joke"
					class="my-4"
				/>
			</Feature>
			<Feature title="Server and user timezones">
				<p>
					Make the commands more accurate by setting your user timezone. This will be used when you
					use a Christmas command on any server.
				</p>
				<p>
					The server's timezone is used for the automatic countdown in the morning, and will be used
					as the default when a user who has not set a personal timezone uses a command.
				</p>
				<br />
				<p class="text-right">
					<Link href="/discord/timezones">
						Learn more <i class="fas fa-arrow-right" />
					</Link>
				</p>
			</Feature>
			<Feature title="Server and user locales">
				<p>
					Similarly to the timezones, users can set their own language, and administrators can set
					the server's default.
				</p>
				<p>
					If the bot hasn't been translated to your language yet, you can contribute on <Link
						href="https://github.com/christmas-countdown/bot">GitHub</Link
					>.
				</p>
				<br />
				<p class="text-right">
					<Link href="https://hosted.weblate.org/engage/christmas-countdown/"
						>Translate <i class="fas fa-arrow-right" /></Link
					>
				</p>
			</Feature>
		</div>
	</div>
	<div class="text-center my-12">
		<p class="my-4">All of these features are available for free.</p>
		<p>
			<a href="/discord/add" class="umami--click--add2">
				<Button colour="bg-blurple" text="Add to Discord" icon="fab fa-discord" />
			</a>
			<a href="https://actiniumcloud.com" class="font-semibold text-sm hover:underline m-2">
				<img src="/actinium.png" alt="ActiniumCloud" class="h-8 inline" />Powered by ActiniumCloud
			</a>
		</p>
	</div>
	<div class="grid grid-cols-1 gap-4 sm:w-1/2 mx-auto mt-12">
		<a
			href="https://top.gg/bot/648134637654114309"
			class="mx-2 transform hover:scale-105 duration-300 umami--click--radio"
			target="_blank"
		>
			<Card background="bg-blurple" border="border-blurple">
				<div class="p-6">
					<h2 class="font-bold text-xl mb-2">
						<img
							src="https://images.discordapp.net/avatars/648134637654114309/6d6986c735dec65ba5e2e731db15909c.png?size=48"
							alt="Logo"
							class="rounded-3xl mr-4 inline"
						/>Christmas Radio <i class="fas fa-external-link-alt" />
					</h2>
					<p>
						Play Christmas music 24/7 in your Discord server with the
						<Link href="https://top.gg/bot/648134637654114309">Christmas Radio bot.</Link>
					</p>
				</div>
			</Card>
		</a>
	</div>
</div>